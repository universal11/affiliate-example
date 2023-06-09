import React, { Component } from 'react';
import { Container } from 'reactstrap';

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
        {this.props.children}
      </div>
    );
  }
}
