import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { About } from "./Components/About";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/aboutchess">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
