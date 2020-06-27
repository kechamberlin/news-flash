import React, { useState, useEffect } from 'react';
import TopStories from './TopStories';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function World() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const API_KEY = 'RT4G87zFK5XAmxjRnkqTtJyAD7Af42sZ';
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.results);
    setStory(data.results);
  };

  return (
    <div id='world' style={{ backgroundColor: 'whitesmoke' }}>
      <h1 className='section-heading'>World News</h1>
      <Container>
        <Row>
          <Col lg={9}>
            {story.slice(0, 10).map((news, index) => (
              <TopStories
                key={index}
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

export default World;
