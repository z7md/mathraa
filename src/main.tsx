import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RentalProvider } from "./context/RentalContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RentalProvider>
      <App />
    </RentalProvider>
  </React.StrictMode>
);
