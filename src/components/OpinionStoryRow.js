import React from 'react';
import Card from 'react-bootstrap/Card';

function StoryRow({ title, byline }) {
  return (
    <div>
      <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Subtitle className='mb-2 text-muted'>
            {byline.substring(3)}
          </Card.Subtitle>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StoryRow;
