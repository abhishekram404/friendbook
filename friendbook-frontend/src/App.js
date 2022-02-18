import React, { useEffect, useState } from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import { useDispatch } from "react-redux";
import { fetch_user_info } from "./redux/actions/userActions";
import Cookies from "js-cookie";
import AppContext from "./utils/context";
function App() {
  const dispatch = useDispatch();

  const [isUserLoggedIn] = useState(
    () =>
      sessionStorage.getItem("isUserLoggedIn") ||
      Cookies.get("isUserLoggedIn") === "true" ||
      false
  );

  useEffect(() => {
    isUserLoggedIn && dispatch(fetch_user_info());
  }, [isUserLoggedIn]);

  return (
    <AppContext.Provider value={{ isUserLoggedIn }}>
      <div className="App">
        <Router history={history}>
          <Navbar />
          <ProtectedRoute path="/" exact component={Layout} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
