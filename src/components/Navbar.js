import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from 'react-scroll';

function MyNavbar() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <Navbar style={{ backgroundColor: 'firebrick' }} expand='lg' sticky='top'>
      <Navbar.Brand
        style={{ fontSize: '2rem', color: 'white' }}
        className='project-logo pointer'
        onClick={scrollToTop}
      >
        NewsFlash
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto nav-links'>
          <Link
            className='nav-links'
            activeClass='active'
            to='american-news'
            spy={true}
            smooth={true}
            offset={-79}
            duration={500}
          >
            U.S.
          </Link>

          <div className='separator'>|</div>

          <Link
            className='nav-links'
            activeClass='active'
            to='world'
            spy={true}
            smooth={true}
            offset={-79}
            duration={500}
          >
            World
          </Link>

          <div className='separator'>|</div>

          <Link
            className='nav-links'
            activeClass='active'
            to='politics'
            spy={true}
            smooth={true}
            offset={-79}
            duration={500}
          >
            Politics
          </Link>

          <div className='separator'>|</div>

          <Link
            className='nav-links'
            activeClass='active'
            to='health'
            spy={true}
            smooth={true}
            offset={-79}
            duration={500}
          >
            Health
          </Link>

          <div className='separator'>|</div>

          <Link
            className='nav-links'
            activeClass='active'
            to='business'
            spy={true}
            smooth={true}
            offset={-79}
            duration={500}
          >
            Business
          </Link>

          <div className='separator'>|</div>

          <Link
            className='nav-links'
            activeClass='active'
            to='sci-tech'
            spy={true}
            smooth={true}
            offset={-79}
            duration={500}
          >
            Science {'&'} Tech
          </Link>

          <div className='separator'>|</div>

          <Link
            className='nav-links'
            activeClass='active'
            to='opinion'
            spy={true}
            smooth={true}
            offset={-79}
            duration={500}
          >
            Opinion
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
