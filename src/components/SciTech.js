import React, { useState, useEffect } from 'react';
import TopStories from './TopStories';
import Technology from './Technology';

function SciTech() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const API_KEY = 'RT4G87zFK5XAmxjRnkqTtJyAD7Af42sZ';
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.results);
    setStory(data.results);
  };

  return (
    <div id='sci-tech' style={{ backgroundColor: 'purple' }}>
      <div>Science {'&'} Tech</div>
      {story.slice(0, 5).map((news, index) => (
        <TopStories
          key={index}
          title={news.title}
          abstract={news.abstract}
          image={news.multimedia[0].url}
        />
      ))}
      <Technology />
    </div>
  );
}

export default SciTech;
