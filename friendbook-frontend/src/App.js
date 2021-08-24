import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import "./styles/global.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Layout} />
        <Route path="/home" exact component={Layout} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
