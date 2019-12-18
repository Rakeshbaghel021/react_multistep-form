// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
import Form from "./components/form"
import "./styles/style.css";

export default  function App(){
  return(
    <>
    <Form/>
    </>
  )
}

render(<App />, document.getElementById("root"));
