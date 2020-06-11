import React from 'react';
import MainStory from './MainStory';
import MostPopular from './MostPopular';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyJumbotron() {
  return (
    <div>
      <Container>
        <Jumbotron>
          <Row className='justify-content-md-center'>
            <Col>
              <MainStory />
            </Col>
            <Col xs lg='2'>
              <MostPopular />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default MyJumbotron;
