import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

export default function Header() {
  return (
  <div className="hero-image">
    <Container>
      <Row>
        <Col>
          <div className="hero-text">
            <h2>Add Your Favorites to Your Collection</h2>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  </div>
  );
}
