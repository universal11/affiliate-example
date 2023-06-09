import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {

  static defaultProps = {

  };

  navMenu_onNavBarToggle = () => {
    if(this.props.onNavBarToggle){
      this.props.onNavBarToggle();
    }
  }

  navMenu_onPageChange = () => {
    if(this.props.onPageChange){
      this.props.onPageChange();
    }
  }

  render() {

    return (
      <div>
        <NavMenu 
            onNavBarToggle={this.navMenu_onNavBarToggle}
            onPageChange={this.navMenu_onPageChange}
            isOpen={this.props.isNavBarOpen}
        />
        {this.props.children}
      </div>
    );
  }
}
