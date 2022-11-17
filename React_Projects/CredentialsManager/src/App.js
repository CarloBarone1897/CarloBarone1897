import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  //We add then this function to check if there is a stored local value-key pair

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []); //I just moved into the useEffect all the functions before, the dependencies I'll add later
  //Usually you want a list of dependencies, otherwise what's the point of the useEffect() hook?
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Here I'd like to store something
  //Usually COOKIES and LOCAL STORAGES are used --> Here I'll go with LocalStorage.

  //-->
  localStorage.setItem("isLoggedIn", "1"); //Two strings, first one the variable, second one up to me for
  //describing the state.
  //Then, we want to check if this data is still in localStorage.
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
