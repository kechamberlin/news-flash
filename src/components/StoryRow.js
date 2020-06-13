import React from 'react';
import Card from 'react-bootstrap/Card';

function StoryRow({ image, title }) {
  return (
    <div>
      {/* <img style={{ height: '5rem', width: '5rem' }} src={image} alt='' />
      <p>{title}</p> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StoryRow;
