import React from 'react';
import { Navbar, Button, Container, NavItem } from "react-bootstrap";
import { selectUser, logout } from '../redux/reducer/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import logo from "../img/logo.png";

function Navbar1() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={logo} alt="Logo" />
          <Navbar.Brand href="#home" >ToDo List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#Login">{user.name}</a>
            </Navbar.Text>
            <NavItem className="d-flex px-md-5">
              <Button variant="outline-success" onClick={(e) => handleLogout(e)}>Logout</Button>
            </NavItem>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1
