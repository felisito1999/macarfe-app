import React, { Component } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Home";
import NavigationBar from "./Components/NavigationBar";
import "./App.css";
import Product from "./Components/Products";
import Contact from "./Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-container bg-light vh-100">
        <Router>
          <header>
            <NavigationBar />
          </header>
          <div>
            <Switch>
              <Route exact path={"/macarfe-app/"} component={Home} />
              <Route
                exact
                path={"/macarfe-app/productos"}
                component={Product}
              />
              <Route
                exact
                path={"/macarfe-app/contactanos"}
                component={Contact}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
