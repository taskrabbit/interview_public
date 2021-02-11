import React from "react";
import "./App.css";
import Error from "./components/Error";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";
import Auth, { VALIDATION_ERROR, CONNECTION_ERROR } from "./services/Auth";

function App() {
  return <React.Fragment>Hello from login</React.Fragment>;
}

export default App;
