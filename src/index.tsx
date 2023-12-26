import React from "react";
import AppLoader from "./AppLoader";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement) {
   createRoot(rootElement).render(<AppLoader />);
}
