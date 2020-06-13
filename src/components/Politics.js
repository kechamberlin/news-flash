import React, { useState, useEffect } from 'react';
import StoryRow from './StoryRow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Politics() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const API_KEY = 'RT4G87zFK5XAmxjRnkqTtJyAD7Af42sZ';
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.results);
    setStory(data.results);
  };

  return (
    <div id='politics' style={{ backgroundColor: 'whitesmoke' }}>
      <div>Politics</div>
      <Container>
        <Row>
          <Col className='my-grid-6'>
            {story.slice(0, 6).map(news => (
              <StoryRow
                key={news.title}
                image={news.multimedia[0].url}
                title={news.title}
                caption={news.multimedia[0].caption}
                url={news.url}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Politics;
