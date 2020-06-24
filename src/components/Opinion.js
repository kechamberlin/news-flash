import React, { useState, useEffect } from 'react';
import OpinionStoryRow from './OpinionStoryRow';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Opinion() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const API_KEY = 'RT4G87zFK5XAmxjRnkqTtJyAD7Af42sZ';
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.results);
    setStory(data.results);
  };

  return (
    <div id='opinion' style={{ backgroundColor: 'whitesmoke' }}>
      <div>Opinion</div>

      <Container>
          <Col>
            {story.map(news => (
              <OpinionStoryRow
                key={news.title}
                title={news.title}
                byline={news.byline}
                url={news.url}
              />
            ))}
          </Col>
      </Container>
    </div>
  );
}

export default Opinion;
