import React, { useState, useEffect } from 'react';
import MostPopularItem from './MostPopularItem';

function MostPopular() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const API_KEY = 'RT4G87zFK5XAmxjRnkqTtJyAD7Af42sZ';
    const response = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.results);
    setStory(data.results);
  };

  return (
    <div>
      <p>Trending Today</p>
      {story.slice(0, 10).map(news => (
        <MostPopularItem key={news.id} title={news.title} />
      ))}
    </div>
  );
}

export default MostPopular;
