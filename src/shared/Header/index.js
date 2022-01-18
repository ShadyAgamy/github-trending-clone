import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.scss';

function Header({desc}) {
  return (
    <header className="header ">
      <Row className='w-100'>
        <Col lg={{ span: 6, offset: 3 }} className='d-flex flex-column align-items-center justify-content-center'>
          <h1>Trending</h1>
          <p>{desc}</p>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
