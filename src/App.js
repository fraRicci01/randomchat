import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import commentBox from './pages/components/commentBox';
import About from './pages/about';
import Home from './pages';
import AddIcon from '@mui/icons-material/Add';;

//position: "fixed", width: "100%", bottom: "0"
export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/comment">
            <commentBox />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

function Users() {
  return (
  <div>
    <ul class="nav justify-content-center" id="bottomNav">
        <li class="nav-item">
          <button class="addIcon">
            <AddIcon />
          </button>
        </li>
      </ul>
  </div>
  );
}

/*function App() {
  return (
    <Switch />
  );
}*/
