import React from "react";
import ReactDOM from "react-dom/client";
import ProductPage from "./ProductPage";

const App = () => {
    return(<ProductPage />);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);