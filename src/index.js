import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
    return <h2>My first Component</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting></Greeting>);
