import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function navBar(props){
    return(
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Talentica</Navbar.Brand>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Link to = '/' >
                    <Nav.Link href="#home">Home</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
              <Link to = "/about">
                   <Nav.Link  href="#about" >About Us</Nav.Link>
               </Link>
          </Nav.Item>
          <Nav.Item>
              <Link to = "/jobs">
                   <Nav.Link href="#jobs">Jobs</Nav.Link>
               </Link> 
           </Nav.Item>
          <Nav.Item>
            <Link to = "/contact">
                    <Nav.Link href="#contact" >Contact</Nav.Link>
            </Link>  
          </Nav.Item>
          <Nav.Item>
            <Link to = "/login">
                    <Nav.Link href="#contact" >Logout</Nav.Link>
            </Link>  
          </Nav.Item>
        </Nav>
        <Navbar.Brand href="#home">{props.userName}</Navbar.Brand>
      </Container>
      </Navbar>
    );
}

export default navBar;

// <Nav.Link href="avatar">
//                <img src={png1} alt="Avatar" className="avatar"></img>
//               </Nav.Link>     