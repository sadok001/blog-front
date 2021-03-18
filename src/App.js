import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Authentication from "./components/auth/Authentication";
import Home from "./components/Home";

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Switch>
      <Route path="/login" render={
              props => {
                if (token) return <Redirect to="/" />;
                return <Authentication />
              }
            } />
            <Route exact path="/" render={
              props => {
                if (!token) return <Redirect to="/login" />;
                return <Home />
              }
            } />
         </Switch>
    </Router>
  );
}

export default App;
