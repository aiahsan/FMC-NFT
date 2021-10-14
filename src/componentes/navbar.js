import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { IoLogoTwitter } from 'react-icons/io';
import { FaDiscord } from 'react-icons/fa';
export default () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 425px)'
  })
  return (
    <header>
      <div className='container-fluid fixed-top bg-black'>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <Navbar  collapseOnSelect expand='lg' variant='dark'>
              <div className='d-flex'>
                <div className='d-iocn'>
                  {' '}
                  <IoLogoTwitter color='#5165f6' fontSize={25} />
                </div>
                <div className='d-iocn'>
                  <FaDiscord color='#5165f6' fontSize={25} />
                </div>
              </div>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse className=' ' id='responsive-navbar-nav '>
                <div className='d-flex w-100 justify-content-between vc-nav'>
                  <Nav className='me-auto nav-cstm d-flex justify-content-center w-100'>
                    <Nav.Link
                      className='w-100 nav-btn d-flex login-btn bg-thser'
                      eventKey={2}
                      href='#memes'
                    >
                      MINT IN:
                      <span>
                        <div>
                          <p>10</p>
                          <p>Days</p>
                        </div>
                        <div></div>
                        <div></div>
                      </span>
                      <span>
                        <div>
                          <p>07</p>
                          <p>HOURS</p>
                        </div>
                        <div></div>
                        <div></div>
                      </span>
                      <span>
                        <div>
                          <p>45</p>
                          <p>MINUTES</p>
                        </div>
                        <div></div>
                        <div></div>
                      </span>
                      <span>
                        <div>
                          <p>09</p>
                          <p>SECONDS</p>
                        </div>
                        <div></div>
                        <div></div>
                      </span>
                    </Nav.Link>
                    <Nav.Link>
                      {' '}
                      <Link
                        activeclass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={250}
                      >
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        activeclass='active'
                        to='Mint'
                        spy={true}
                        smooth={true}
                        duration={250}
                      >
                        MINT
                      </Link>
                    </Nav.Link>
                  </Nav>
                  <Nav className='me-auto nav-cstm'>
                    <Nav.Link
                      className='nav-btn d-flex login-btn bg-thser'
                      eventKey={2}
                      href='#memes'
                    >
                      Connect wallet
                    </Nav.Link>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
};
