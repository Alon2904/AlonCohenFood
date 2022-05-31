import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <SigninPage />
      </Route>
      <Route path={"/"}>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
