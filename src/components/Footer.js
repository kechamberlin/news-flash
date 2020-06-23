import React from 'react';
import logo from '../images/nytimes-api.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Footer() {
  return (
    <div className='footer'>
      <Container className='text-center'>
        <Row>
          <Col>
            <a
              href='https://developer.nytimes.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={logo} fluid />
            </a>
            <div>
              <strong>
                <u>Disclaimer:</u>
              </strong>{' '}
              The New York Times does not promote or endorse this webpage or any
              third party, nor the causes, ideas, web sites, products, or
              services of this webpage or any third party.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
