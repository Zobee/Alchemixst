import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import {Navbar, Nav} from 'react-bootstrap' 


const Header = () => {
  return(
<Navbar bg="dark" expand="lg">
  <Navbar.Brand><Link to='/' className='text-light' >Alchemixst</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to='/' className="nav-link text-light" >Home</Link>
      <Link to='/drumpad' className="nav-link text-light">Make Some Beats!</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  )
  
}

export default Header