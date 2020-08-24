import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Content/truck_logo.svg";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar className="company-navbar" variant="dark" expand="md">
          <div className="container">
            {/* <Navbar.Brand href="/felix-news-app">Felix News App</Navbar.Brand> */}
            <Navbar.Brand href="/macarfe-app/">
              <img
                alt=""
                src={logo}
                width="50"
                height="40"
                className="d-inline-block align-top"
              />{" "}
              <p className="d-inline-block m-0 align-middle">Macarfe</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/macarfe-app/">
                  Home
                </Link>
                <Link className="nav-link" to={"/macarfe-app/productos"}>
                  Productos
                </Link>
                <Link className="nav-link" to={"/macarfe-app/contactanos"}>
                  Contáctanos
                </Link>
                {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
                {this.state.categories.map((category, item) => (
                  <Link
                    key={item}
                    className="dropdown-item"
                    to={`/felix-news-app/articles/byCategories/${category.CategoryId}`}
                  >
                    {category.Name}
                  </Link>
                ))}
              </NavDropdown> */}
                {/* <Link className="nav-link" to={"/felix-news-app/users"}>
                  Users
                </Link> */}
              </Nav>
              {/* <Nav className="nav navbar-nav navbar-right">
              {this.state.isUserLoggedIn ? (
                <>
                  <Link to={"/felix-news-app/"} className="nav-link">
                    Hello, {this.state.username}
                  </Link>
                  <span className="nav-link text-secondary pr-2 pl-2">|</span>
                  <button
                    onClick={this.logoutUser}
                    className="nav-link btn btn-link"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <div className="form-inline">
                  <Link className="nav-link" to="/felix-news-app/login">
                    Login
                  </Link>{" "}
                  <span className="text-secondary pr-2 pl-2">|</span>
                  <Link className="nav-link" to="/felix-news-app/registration">
                    Register
                  </Link>
                </div>
              )}
            </Nav> */}
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
