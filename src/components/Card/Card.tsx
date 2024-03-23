import "./Card.css";

import React from "react";
import CardProps from "./CardProps";

export default function Card(props: CardProps) {
   return (
      <div className={`card ${props.className}`}>
         <h3 className="text">{props.title}</h3>
         <h5 className="alt">{props.subtitle}</h5>
         <img
            className={`cardInner ${props.cardImageProps.className}`}
            style={{ width: props.cardImageProps.width }}
            src={props.cardImageProps.src}
            alt={props.cardImageProps.alt}
         />
      </div>
   );
}
