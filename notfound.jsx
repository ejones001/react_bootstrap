import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import notFoundImage from './assets/not-found-image.jpg'; // Adjust the path as necessary

const NotFound = () => {
  return (
    <Container style={{ backgroundColor: '#f8f9fa', color: '#343a40', padding: '50px', textAlign: 'center' }}>
      <Row className="align-items-center">
        <Col md={6}>
          <h1 style={{ color: '#dc3545' }}>404 - Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Button variant="primary" as={NavLink} to="/">Go to Homepage</Button>
        </Col>
        <Col md={6}>
          <Image src={notFoundImage} fluid alt="Not Found" />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
