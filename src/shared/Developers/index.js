import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import fetchedData from '../../data/developers';

import './styles.scss';

function Developers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fetchedData);
  }, []);

  const renderData = data.map((repo) => {
    const { rank, username, name, url, avatar, popularRepository } = repo;
    const {repositoryName,description, popularRepositoryUrl} = popularRepository
    return (
      <Row key={rank} className="repo  w-100 mx-0">
        <Col lg={3}>
          <div className="d-flex flex-column">
            rank
            <a className="repo-link d-flex" href={url} target={'_blank'} rel="noreferrer">
              <img src={avatar} alt="" />
              <div className="d-flex flex-column align-items-center">
                <span>{username}</span>
                <span>{name}</span>
              </div>
            </a>
            <p className="repo-desc">{description}</p>
           
          </div>
        </Col>
        <Col lg={{ span: 3, offset: 1 }}>
          <div className="d-flex flex-column">
            <h6><i className="fas fa-fire"></i>POPULAR REPO</h6>
            <a href={popularRepositoryUrl} ><i className="fas fa-laptop icon"></i>{repositoryName}</a>
            <p>{description}</p>
          </div>
        </Col>
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
                <Link to="/" className="flex-sm-fill text-sm-center nav-link ">
                  Repositroies
                </Link>
                <Link to="/developers" className="flex-sm-fill text-sm-center nav-link active">
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
          <main className="trending-main">{renderData}</main>
        </Col>
      </Row>
    </Container>
  );
}

export default Developers;
