import "./CardImg.css";

import React from "react";
import CardImgProps from "./CardImgProps";

export default function CardImg(props: CardImgProps) {
   return (
      <div className={`cardImg ${props.className}`}>
         <img
            className={`cardImgInner ${props.className}`}
            style={{ width: props.width }}
            src={props.src}
            alt={props.alt}
         />
      </div>
   );
}
