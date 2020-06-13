import React, { useState, useEffect } from 'react';
import StoryRow from './StoryRow';

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
    <div style={{ backgroundColor: 'yellow' }}>
      <div>Opinion</div>
      {story.slice(0, 8).map(news => (
        <StoryRow
          key={news.title}
          image={news.multimedia[0].url}
          title={news.title}
        />
      ))}
    </div>
  );
}

export default Opinion;
