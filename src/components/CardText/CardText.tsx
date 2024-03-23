import "./CardText.css";

import React from "react";
import CardTextProps from "./CardTextProps";

export default function CardText(props: CardTextProps) {
   return (
      <div className={`cardText ${props.className}`}>
         <h1>{props.title}</h1>
         <h4>{props.subtitle}</h4>
         <p>{props.description}</p>
      </div>
   );
}
