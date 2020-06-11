import React from 'react';
import TopStories from "./TopStories";
import Politics from "./Politics";
import Opinion from "./Opinion";

function AmericanNews() {
  return (
    <div>
      <div>American News</div>
      <TopStories />
      <Politics />
      <Opinion />
      
    </div>
  );
}

export default AmericanNews;
