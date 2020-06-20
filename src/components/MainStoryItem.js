import React from 'react';
import Figure from 'react-bootstrap/Figure';

function MainStoryItem({ image, title, abstract, url, caption }) {
  return (
    <div className='main-story'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Figure>
          <Figure.Image src={image} alt={caption} fluid />
          <Figure.Caption bsPrefix className='main-story-title' as='h4'>
            {title}
          </Figure.Caption>
          <Figure.Caption bsPrefix className='main-story-abstract'>
            {abstract}
          </Figure.Caption>
        </Figure>
      </a>
    </div>
  );
}

export default MainStoryItem;
