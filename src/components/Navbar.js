import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from 'react-scroll';

function MyNavbar() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <Navbar bg='light' expand='lg' sticky='top'>
      <Navbar.Brand onClick={scrollToTop}>NewsFlash</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto nav-links'>
          <Link
            // className='nav-links'
            activeClass='active'
            to='american-news'
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          >
            U.S.
          </Link>

          <Link
            // className='nav-links'
            activeClass='active'
            to='world'
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          >
            World
          </Link>

          <Link
            // className='nav-links'
            activeClass='active'
            to='politics'
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          >
            Politics
          </Link>

          <Link
            // className='nav-links'
            activeClass='active'
            to='business'
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          >
            Business
          </Link>

          <Link
            // className='nav-links'
            activeClass='active'
            to='sci-tech'
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          >
            Science {'&'} Tech
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
