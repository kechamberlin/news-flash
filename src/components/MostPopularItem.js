import React from 'react';
import Figure from 'react-bootstrap/Figure';

function MostPopularItem({ title, url }) {
  return (
    <div>
      <a href={url} target='_blank' rel='noopener noreferrer' className='trending-link'>
        <Figure>
          <Figure.Caption bsPrefix className='trending-title'>
            {title}
          </Figure.Caption>
        </Figure>
      </a>
    </div>
  );
}

export default MostPopularItem;
