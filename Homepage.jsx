import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from './assets/welcome-image.jpg'; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div className="homepage" style={{ backgroundColor: '#f8f9fa', color: '#343a40', padding: '20px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Image src={welcomeImage} fluid style={{ marginBottom: '20px' }} />
      <Button variant="primary" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>Shop Now</Button>
      <Card style={{ marginTop: '20px' }}>
        <Card.Body>
          <Card.Title>Featured Product</Card.Title>
          <Card.Text>
            Check out our latest featured product, available now at a special price!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
