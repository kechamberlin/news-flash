import React from 'react';

function Article({ title, abstract, image, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <a href={url} target='_blank'>
        <img
          src={image}
          alt='something'
          style={{ height: '15rem', width: '25rem' }}
        />
      </a>
      <p>{abstract}</p>
    </div>
  );
}

export default Article;
