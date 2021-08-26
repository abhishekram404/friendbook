import React, { useEffect } from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import { useDispatch } from "react-redux";
import { check_is_logged_in } from "./redux/actions/userActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_is_logged_in());
  });

  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <ProtectedRoute path="/" exact component={Layout} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
