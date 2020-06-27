import React, { useState, useEffect } from 'react';
import TopStories from './TopStories';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Technology() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const API_KEY = 'RT4G87zFK5XAmxjRnkqTtJyAD7Af42sZ';
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.results);
    setStory(data.results);
  };

  return (
    <div id='technology' className='content-body'>
      <h1 className='section-heading'>Technology</h1>
      <Container>
        <Row>
          <Col>
          {story.slice(0, 10).map((news, index) => (
              <TopStories
                key={index}
                title={news.title}
                url={news.url}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Technology;
