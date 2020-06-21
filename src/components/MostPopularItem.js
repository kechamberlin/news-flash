import React from 'react';
import Figure from 'react-bootstrap/Figure';

function MostPopularItem({ title, url }) {
  return (
    <div className='trending'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {/* <p>{title}</p> */}
        <Figure>
          <Figure.Caption bsPrefix>
            {title}
          </Figure.Caption>
        </Figure>
      </a>
    </div>
  );
}

export default MostPopularItem;
