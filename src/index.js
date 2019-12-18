// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
import Formlast from "./components/formlast";
import Form2step from "./components/form2step";
import Form from "./components/form"
import "./styles/style.css";

export default  function App(){
  return(
    <>
    <Form/>
    <Form2step/>
    <Formlast/>
    </>
  )
}

render(<App />, document.getElementById("root"));
