import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import fetchedData from '../../data/repositories';

import './styles.scss';

function Repositories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fetchedData);
  }, []);

  const renderReps = data.map((repo) => {
    const { rank, username, repositoryName, url, description, language, totalStars, forks, builtBy } = repo;
    return (
      <Row key={rank} className="repo  w-100 mx-0">
        <Col lg={6}>
          <div className="d-flex flex-column">
            <a className="repo-link" href={url} target={'_blank'} rel="noreferrer">
              <i className="fas fa-laptop icon"></i> {username}/{repositoryName}
            </a>
            <p className="repo-desc">{description}</p>
            <div className="d-flex repo-numbers">
              <span>{language}</span>
              <span>
                <i className="far fa-star"></i>
                {totalStars}
              </span>
              <span>
                <i className="fas fa-code-branch"></i>
                {forks}
              </span>
              <div className="d-flex repo-builtBy">
                <span>Built by </span>
                {builtBy.map((developer) => {
                  const { url, avatar } = developer;
                  return (
                    <a key={url} href={url} target={'_blank'} rel="noreferrer">
                      <img src={avatar} alt="Developer" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 3, offset: 4 }}></Col>
      </Row>
    );
  });

  return (
    <Container>
      <Row className="trending w-100 mx-0 d-flex justify-content-center">
        <Col lg={{ span: 9, offset: 1 }} className="trending-container px-0">
          <nav className="nav nav-pills flex-column flex-sm-row">
            <Row className="w-100 px-0  d-flex align-items-center justify-content-between">
              <Col md={3} className="d-flex align-items-center">
                <Link to="/" className="flex-sm-fill text-sm-center nav-link active">
                  Repositroies
                </Link>
                <Link to="/developers" className="flex-sm-fill text-sm-center nav-link">
                  Developers
                </Link>
              </Col>
              <Col md={{ span: 4, offset: 4 }} className="">
                <div className="nav-filters">
                  <div className="d-flex justify-content-end">
                    <DropdownButton variant="secondary" title="spoken langs">
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton variant="secondary" title="spoken langs">
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton variant="secondary" title="spoken langs">
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </Col>
            </Row>
          </nav>
          <main className="trending-main">{renderReps}</main>
        </Col>
      </Row>
    </Container>
  );
}

export default Repositories;
