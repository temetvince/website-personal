import "./Quote.css";

import React from "react";
import QuoteProps from "./QuoteProps";

export default function Quote(props: QuoteProps) {
   return (
      <div className={`quote ${props.className}`}>
         <h5>{props.quote}</h5>
      </div>
   );
}
