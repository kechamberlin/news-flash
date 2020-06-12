import React, { useState, useEffect } from 'react';
import TopStories from './TopStories';
import Politics from './Politics';
import Opinion from './Opinion';

function AmericanNews() {
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
      <div>American News</div>
      {story.slice(0, 5).map((news, index) => (
        <TopStories
          key={index}
          title={news.title}
          abstract={news.abstract}
          image={news.multimedia[0].url}
        />
      ))}
      <Politics />
      <Opinion />
    </div>
  );
}

export default AmericanNews;

// THIS GRABS JUST THE 1 IMAGE I WANT
//  ...getStories...
//      ...console.log(data.results[0].multimedia[0].url);
//      ...setStory(data.results[0].multimedia[0].url);
//  ...
//  <Article image={story} />

// THIS SLICES THE ARRAY TO DISPLAY INDICES 0-5
//  {story.slice(0,5).map((news, index) => (
//      <Article
//         key={index}
//         title={news.title}
//         abstract={news.abstract}
//         image={news.multimedia[0].url}
//      />
// ))}

//   THIS MAPS ALL THE STORIES AS ORIGINALLY SEEN
//       {story.map(news => (
//           <Article
//           key={news.title}
//           title={news.title}
//           abstract={news.abstract}
//           image={news.multimedia[0].url}
//           url={news.url}
//           />
//       ))}
