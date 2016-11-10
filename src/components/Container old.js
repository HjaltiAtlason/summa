import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';




class Container extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Jafna</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Lántaki</NavItem>
            <NavItem eventKey={2} href="#">Fjárfestir</NavItem>
            <NavItem eventKey={3} href="#">Um okkur</NavItem>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default Container;
