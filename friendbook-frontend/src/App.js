import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import "./styles/global.scss";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import history from "./history";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Route path="/" exact component={Layout} />
        <Route path="/home" exact component={Layout} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
