import "./Header.css";

import React from "react";
import HeaderProps from "./HeaderProps";

export default function Header(props: HeaderProps) {
   return (
      <header>
         {props.navItems.map((item) => (
            <a key={item.label} href={item.path}>
               {item.label}
            </a>
         ))}
      </header>
   );
}
