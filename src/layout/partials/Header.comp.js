import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/img/logo.jpg'

export const Header = () => {
   return <Navbar
            collapseOnSelect
            variant="dark"
            bg="black"
            expand="md">
       <Navbar.Brand>
           log
       </Navbar.Brand>
       <img src={logo} alt="logo" width="50px" />
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto">
               <Nav.Link href="/dashboard">Dashboard</Nav.Link>
               <Nav.Link href="/tickets">Tickets</Nav.Link>
               <Nav.Link href="/logout">Logout</Nav.Link>
           </Nav>
       </Navbar.Collapse>
   </Navbar>
}
