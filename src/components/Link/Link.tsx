import React from "react";
import LinkProps from "./LinkProps";

export default function Link(props: LinkProps) {
   return (
      <header>
         <p>{props.label}</p>
      </header>
   );
}
