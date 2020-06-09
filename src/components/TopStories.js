import React, { useState, useEffect } from 'react';
import Article from './Article';

function TopStories() {
  const [] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const API_KEY = '24c2c6eb3889484bbc95889c82c924b1';
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.articles);
    // setState(data.articles);
  };

  return (
    <div>
      <h1>Top Stories</h1>
    </div>
  );
}

export default TopStories;
