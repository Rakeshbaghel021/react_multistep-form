// Absolute Imports
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Relative Imports
import Formlast from "./components/formlast";
import Form2step from "./components/form2step";
import Form from "./components/form"
import "./styles/style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      form1: {
        userName: "",
        email: "",
        password: "",
      },
      form2: {
        fullName: "",
        country: "",
        about: ""
      }
    }
  }

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      form1: {
        ...this.state.form1,
        [name]: value
      }
    });
  }

  handleChange2 = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      form2: {
        ...this.state.form2,
        [name]: value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {userName, email, password} = this.state.form1;
    alert(
      `Your details \n
      UserName: ${userName} \n
      Email: ${email} \n
      Password: ${password}`
    )
  }

  handleReset = (e) => {
    this.setState({
      form1: {
        userName: "",
        email: "",
        password: ""
      }
    });
  }

  render() {
    return(
      <>
        <Switch>
          <Route path="/form-last">
            <Formlast handleSubmit={this.handleSubmit}/>
          </Route>
          <Route path="/form2">
              <Form2step data={this.state.form2} handleChange={this.handleChange2} />
          </Route>
          <Route path="/">
            <Form data={this.state.form1} handleChange={this.handleChange} reset={this.handleReset} />
          </Route>
        </Switch>
      </>
    )
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
