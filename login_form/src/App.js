import React, { useState } from "react";
import "./App.css";
import Error from "./components/Error";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";
import Loading from './components/Loading';
import Auth, { VALIDATION_ERROR, CONNECTION_ERROR } from "./services/Auth";
import "./css/app.css";

function App() {
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [validationError, setValidationError] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
    setName('');
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleTryAgain = () => {
    setConnectionError(false);
    setValidationError(false);
  }

  const clearLoginInfo = () => {
    setPassword('');
    setUsername('');
  }

  const handleSubmit = (loginContext) => {
    setLoading(true);

    return Auth.login(loginContext)
      .then((loggedInResult) => {
        setName(loggedInResult.name);
        setLoggedIn(true);
        setValidationError(false);
        setLoading(false);
        clearLoginInfo();
      })
      .catch((err) => {
        switch(err.message) {
          case VALIDATION_ERROR: {
            setValidationError(true);
            break;
          }
          case CONNECTION_ERROR: {
            setConnectionError(true);
            break;
          }
          default:
            throw new Error(`Unidentified error: ${err.message}`);
            break;
        }
        setLoading(false);
        clearLoginInfo();
      });
  }

  return (
    <React.Fragment>
      { loading && <Loading />}
      { !loading && loggedIn && <Profile name={name} logout={handleLogout} />}
      { !loading && !connectionError && !loggedIn && 
        <LoginForm
          password={password}
          username={username}
          setPassword={handlePasswordChange}
          setUsername={handleUsernameChange}
          submit={handleSubmit}
        />
      }
      { !loading && !connectionError && !loggedIn && validationError && <div className="app__message"><p className="app__error">Missing or invalid data.</p></div> }
      { !loading && connectionError && <Error message={'Connection problem!'} tryAgain={handleTryAgain} />}
    </React.Fragment>

  );
}

export default App;
