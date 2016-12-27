import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import styles from './Nav.css';

class Naviga extends Component{
  render() {
    return(
      <div className="navp">
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src={'../resources/img/ft_logo.png'} className="logo-brand" alt="logo" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">ダッシュボード</NavItem>
            <NavItem eventKey={2} href="#">レジストリ</NavItem>
            <NavItem eventKey={3} href="#">ログインID</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}
export default Naviga;
