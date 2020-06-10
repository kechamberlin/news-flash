import React, { useState, useEffect } from 'react';
import Article from './Article';

function TopStories() {
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
    <div>
      <h1>Top Stories</h1>
      {story.map(news => (
        <Article
          key={news.title}
          title={news.title}
          abstract={news.abstract}
          image={news.multimedia[0].url}
          url={news.url}
        />
      ))}
    </div>
  );
}

export default TopStories;
