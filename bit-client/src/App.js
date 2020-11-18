import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/containers/login/login";
import Home from "./components/containers/home/home";
import Graph from "./components/containers/graph/graph";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/graph" component={Graph} />
    </Router>
  );
}

export default App;
