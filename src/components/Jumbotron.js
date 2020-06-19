import React from 'react';
import MainStory from './MainStory';
import MostPopular from './MostPopular';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyJumbotron() {
  return (
    <div>
        <Jumbotron>
          <Row>
            <Col lg={8}>
              <MainStory />
            </Col>
            <Col lg={4} >
              <MostPopular />
            </Col>
          </Row>
        </Jumbotron>
    </div>
  );
}

export default MyJumbotron;
