import React from 'react';
import Media from 'react-bootstrap/Media';
// import Figure from 'react-bootstrap/Figure';

function TopStories({ title, abstract, image, caption, url }) {
  return (
    <div>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Media className='article'>
          <img
            width={250}
            height={150}
            className='mr-3'
            src={image}
            alt={caption}
          />
          <Media.Body>
            <h5 className='article-title'>{title}</h5>
            <p className='article-abstract'>{abstract}</p>
          </Media.Body>
        </Media>

        {/* <Figure className='text-center' style={{ width: '18rem' }}>
          <Figure.Image width={200} height={180} alt={caption} src={image} />
          <Figure.Caption as='h1'>
            <strong>{title}</strong>
          </Figure.Caption>
          <Figure.Caption style={{ fontSize: '12px' }}>
            {abstract}
          </Figure.Caption>
        </Figure> */}
      </a>
    </div>
  );
}

export default TopStories;
