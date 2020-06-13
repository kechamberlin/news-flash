import React from 'react';
import Card from 'react-bootstrap/Card';

function TopStories({ title, abstract, image, url }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{abstract}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TopStories;
