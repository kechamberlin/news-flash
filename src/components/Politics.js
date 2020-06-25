import React, { useState, useEffect } from 'react';
import TopStories from './TopStories';
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
      <h1 className='section-heading'>Politics</h1>
      <Container>
        <Row>
          <Col className='my-grid-3'>
            {story.map(news => (
              <TopStories
                key={news.title}
                title={news.title}
                abstract={news.abstract}
                image={news.multimedia[0].url}
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
