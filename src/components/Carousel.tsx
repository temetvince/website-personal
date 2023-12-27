import "./Carousel.css";

import React from "react";
import CarouselProps from "./CarouselProps";
import { Carousel as CarouselMinimal } from "react-carousel-minimal";

export default function Carousel(props: CarouselProps) {
   return (
      <div className="carousel">
         <CarouselMinimal
            className={props.className}
            data={props.images}
            time={8000}
            width="100%"
            height="66vh"
            radius="5px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            showNavBtn={false}
            style={{
               textAlign: "center",
               margin: "1rem",
            }}
         />
      </div>
   );
}
