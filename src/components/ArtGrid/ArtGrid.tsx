import React, { useState, useEffect, useRef } from 'react';
import './ArtGrid.css';
import ArtGridControls from './ArtGridControls/ArtGridControls';
import ArtGridImageDisplay from './ArtGridImageDisplay/ArtGridImageDisplay';
import ArtGridSquareViewer from './ArtGridSquareViewer/ArtGridSquareViewer';

// Simple string hash function for deterministic seeding
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
};

// Deterministic shuffle based on seed
const seededShuffle = <T,>(array: T[], seed: number): T[] => {
  const result = [...array];
  let m = result.length;
  const rng = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  while (m) {
    const i = Math.floor(rng() * m--);
    [result[m], result[i]] = [result[i], result[m]];
  }
  return result;
};

interface GridSquare {
  row: number;
  col: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const ArtGrid: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [gridRows, setGridRows] = useState<number>(10);
  const [gridCols, setGridCols] = useState<number>(15);
  const [gridSquares, setGridSquares] = useState<GridSquare[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [jumpRow, setJumpRow] = useState<string>('');
  const [jumpCol, setJumpCol] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const scaleRef = useRef<number>(1);
  const displayDimensionsRef = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Verify the file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const img = new Image();
          const result = e.target.result as string;
          img.onload = () => {
            console.log(
              'Image loaded, setting imageSrc:',
              result.substring(0, 50),
            ); // Debug
            setImageSrc(result);
          };
          img.onerror = () => {
            console.error('Image load error');
            alert('Failed to load image');
          };
          img.src = result;
        }
      };
      reader.onerror = () => {
        console.error('FileReader error');
        alert('Error reading file');
      };
      reader.readAsDataURL(file);
    }
  };

  // Initialize grid for the image
  const initializeGrid = (img: HTMLImageElement) => {
    console.log(
      'Initializing grid, image dimensions:',
      img.naturalWidth,
      img.naturalHeight,
    ); // Debug
    const maxWidth = 800; // Maximum width constraint
    const scale = Math.min(1, maxWidth / img.naturalWidth);
    const displayWidth = img.naturalWidth * scale;
    const displayHeight = img.naturalHeight * scale;

    scaleRef.current = scale;
    displayDimensionsRef.current = {
      width: displayWidth,
      height: displayHeight,
    };

    // Calculate grid square dimensions (in original image coordinates)
    const squareWidth = img.naturalWidth / gridCols;
    const squareHeight = img.naturalHeight / gridRows;

    // Create grid squares
    const squares: GridSquare[] = [];
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        squares.push({
          row,
          col,
          x: col * squareWidth,
          y: row * squareHeight,
          width: squareWidth,
          height: squareHeight,
        });
      }
    }

    // Deterministic shuffle using image data hash
    const seed = hashString(imageSrc);
    const shuffled = seededShuffle(squares, seed);
    console.log('Grid squares created:', shuffled.length); // Debug
    setGridSquares(shuffled);
    setCurrentIndex(0);
  };

  // Initialize grid when image loads
  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        initializeGrid(img);
      };
      if (img.complete) {
        console.log('Image already complete, initializing grid'); // Debug
        initializeGrid(img);
      }
      img.onerror = () => {
        console.error('Image load error');
        alert('Failed to load image');
      };
    }
  }, [imageSrc, gridRows, gridCols]);

  // Draw the current square upside down
  useEffect(() => {
    const currentSquare = gridSquares[currentIndex];
    if (canvasRef.current && imageSrc) {
      console.log(
        'Drawing square:',
        currentSquare.row + 1,
        currentSquare.col + 1,
      ); // Debug
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Canvas context not available');
        return;
      }

      // Set canvas size to scaled square dimensions
      const scaledWidth = currentSquare.width * scaleRef.current;
      const scaledHeight = currentSquare.height * scaleRef.current;
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(scaledWidth, scaledHeight);
      ctx.rotate(Math.PI);

      const img = new Image();
      img.onload = () => {
        ctx.drawImage(
          img,
          currentSquare.x,
          currentSquare.y,
          currentSquare.width,
          currentSquare.height,
          0,
          0,
          scaledWidth,
          scaledHeight,
        );
        ctx.restore();
      };
      if (img.complete) {
        ctx.drawImage(
          img,
          currentSquare.x,
          currentSquare.y,
          currentSquare.width,
          currentSquare.height,
          0,
          0,
          scaledWidth,
          scaledHeight,
        );
        ctx.restore();
      }
      img.onerror = () => {
        console.error('Image draw error');
        alert('Failed to draw image section');
      };
      img.src = imageSrc;
    } else {
      if (!canvasRef.current) {
        console.warn('Canvas ref is null'); // Debug
      }
    }
  }, [currentIndex, gridSquares, imageSrc]);

  // Navigation handlers
  const goPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(gridSquares.length - 1, prev + 1));
  };

  // Jump to a specific grid square
  const jumpToSquare = () => {
    const row = parseInt(jumpRow, 10) - 1;
    const col = parseInt(jumpCol, 10) - 1;
    if (
      isNaN(row) ||
      isNaN(col) ||
      row < 0 ||
      row >= gridRows ||
      col < 0 ||
      col >= gridCols
    ) {
      alert('Invalid row or column');
      return;
    }
    const index = gridSquares.findIndex(
      (square) => square.row === row && square.col === col,
    );
    if (index !== -1) {
      setCurrentIndex(index);
      setJumpRow('');
      setJumpCol('');
    } else {
      alert('Square not found in sequence');
    }
  };

  const makeGridSquare = () => {
    if (!imageRef.current) return;

    const img = imageRef.current;
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    // Keep the current number of columns and calculate rows to make squares
    const newRows = Math.round(gridCols / aspectRatio);
    setGridRows(newRows);
  };

  return (
    <div className='app-container'>
      <h1>Art Grid Randomizer</h1>
      <ArtGridControls
        gridRows={gridRows}
        gridCols={gridCols}
        onGridRowsChange={setGridRows}
        onGridColsChange={setGridCols}
        onImageUpload={handleImageUpload}
        onMakeSquares={imageSrc ? makeGridSquare : undefined}
      />
      {imageSrc && gridSquares.length > 0 && (
        <div className='content'>
          <ArtGridImageDisplay
            imageSrc={imageSrc}
            gridSquares={gridSquares}
            scale={scaleRef.current}
            displayDimensions={displayDimensionsRef.current}
            imageRef={imageRef}
          />
          <ArtGridSquareViewer
            currentIndex={currentIndex}
            gridSquares={gridSquares}
            canvasRef={canvasRef}
            onPrevious={goPrevious}
            onNext={goNext}
            jumpRow={jumpRow}
            jumpCol={jumpCol}
            onJumpRowChange={setJumpRow}
            onJumpColChange={setJumpCol}
            onJumpToSquare={jumpToSquare}
          />
        </div>
      )}
    </div>
  );
};

export default ArtGrid;
