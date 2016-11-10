import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav, LinkContainer} from 'react-bootstrap';
import {Link} from 'react-router'



const YfirMenu = (props) => (
        <div> 
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Jafna</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                   
                    <NavItem eventKey={1}>
                       <Link to="/lantaki">Lántaki</Link>
                    </NavItem>                   
                    <NavItem eventKey={2}>
                       <Link to="/fjarfestir">Fjárfestir</Link>
                    </NavItem>
                    <NavItem eventKey={3}>
                      <Link to="/umokkur">Um okkur</Link>
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            {props.children}
            
        </div> 

)

export default YfirMenu;