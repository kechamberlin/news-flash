import React, { useState, useEffect } from 'react';
import MainStoryItem from './MainStoryItem';

function MainStory() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const API_KEY = 'RT4G87zFK5XAmxjRnkqTtJyAD7Af42sZ';
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.results);
    setStory(data.results);
  };

  return (
    <div>
      {story.slice(0, 1).map((news, index) => (
        <MainStoryItem
          key={index}
          image={news.multimedia[0].url}
          title={news.title}
          abstract={news.abstract}
        />
      ))}
    </div>
  );
}

export default MainStory;
