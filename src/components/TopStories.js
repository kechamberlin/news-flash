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
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.results);
    setStory(data.results);
  };

  return (
    <div>
      <h1>Top Stories</h1>
      {/* 
        THIS GRABS JUST THE 1 IMAGE I WANT
            ...getStories...
                ...console.log(data.results[0].multimedia[0].url);
                ...setStory(data.results[0].multimedia[0].url);
            ...
            <Article image={story} />
    */}

      {/* 
      THIS MAPS ALL THE STORIES AS ORIGINALLY SEEN
        {story.map(news => (
            <Article
            key={news.title}
            title={news.title}
            abstract={news.abstract}
            image={news.multimedia[0].url}
            url={news.url}
            />
      ))} */}
    </div>
  );
}

export default TopStories;
