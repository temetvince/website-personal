import React from 'react';
import './ArtGridControls.css';

interface ArtGridControlsProps {
  gridRows: number;
  gridCols: number;
  onGridRowsChange: (rows: number) => void;
  onGridColsChange: (cols: number) => void;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMakeSquares?: () => void;
}

const ArtGridControls: React.FC<ArtGridControlsProps> = ({
  gridRows,
  gridCols,
  onGridRowsChange,
  onGridColsChange,
  onImageUpload,
  onMakeSquares,
}) => {
  return (
    <div className='controls'>
      <div className='input-group'>
        <label>Upload Image:</label>
        <input
          type='file'
          accept='image/*'
          onChange={onImageUpload}
        />
      </div>
      <div className='input-group'>
        <label>Grid Rows:</label>
        <input
          type='number'
          value={gridRows}
          onChange={(e) => {
            onGridRowsChange(Math.max(1, parseInt(e.target.value) || 1));
          }}
          min='1'
        />
      </div>
      <div className='input-group'>
        <label>Grid Columns:</label>
        <input
          type='number'
          value={gridCols}
          onChange={(e) => {
            onGridColsChange(Math.max(1, parseInt(e.target.value) || 1));
          }}
          min='1'
        />
      </div>
      {onMakeSquares && (
        <div className='input-group'>
          <button onClick={onMakeSquares}>Make Squares Equal</button>
        </div>
      )}
    </div>
  );
};

export default ArtGridControls;
