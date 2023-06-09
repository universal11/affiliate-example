import React, { Component } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { App } from "./Classes/App";
// import './NavMenu.css';

export class NavMenu extends Component {

  static defaultProps = {
  };

  constructor (props) {
    super(props);
  }

  navbarToggler_onClick = () => {
    if(this.props.onNavBarToggle){
      this.props.onNavBarToggle();
    }
  }

  logoutButton_onClick = (event) => {
    if(this.props.onLogoutButtonClick){
      this.props.onLogoutButtonClick();
    }
  }

  navLink_onClick = () => {
    if(this.props.onPageChange){
      this.props.onPageChange();
    }
  }

  render() {

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 bg-dark" container dark>
          <NavbarBrand onClick={this.navLink_onClick} tag={Link} to="/">{App.getName()}</NavbarBrand>
          <NavbarToggler onClick={this.navbarToggler_onClick} className="mr-2" />
          <Collapse 
            className="d-sm-inline-flex flex-sm-row-reverse" 
            isOpen={this.props.isOpen} 
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem >
                <NavLink 
                  tag={Link} 
                  // className="text-dark" 
                  to="/"
                  onClick={this.navLink_onClick}
                >
                  Affiliates
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
