import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import './styles.scss';
function RenderData({ data }) {
  return data.map((repo) => {
    const { rank, username, name, url, avatar, popularRepository } = repo;
    const { repositoryName, description, popularRepositoryUrl } = popularRepository;
    return (
      <Row key={rank} className="repo repo_developer  w-100 mx-0">
        <Col lg={3}>
          <div className="d-flex">
            <span className="number">{rank}</span>
            <a className="repo_developer-link d-flex" href={url} target={'_blank'} rel="noreferrer">
              <img src={avatar} alt="" />
              <div className="d-flex flex-column  name">
                <span>{username}</span>
                <span>{name}</span>
              </div>
            </a>
            <p className="repo-desc">{description}</p>
          </div>
        </Col>
        <Col lg={{ span: 3, offset: 2 }}>
          <div className="d-flex flex-column popular_repo">
            <h6>
              <i className="fas fa-fire"></i>POPULAR REPO
            </h6>
            <a href={popularRepositoryUrl}>
              <i className="fas fa-laptop icon"></i>
              {repositoryName}
            </a>
            <p>{description}</p>
          </div>
        </Col>
        <Col lg={{ span: 3, offset: 1 }}>
          <div className="d-flex repo-numbers  giveStar dev_btns">
            <Button variant="secondary">
            <i className="far fa-heart"></i> sponsor
            </Button>
            <Button variant="secondary">
             Follow
            </Button>
          </div>
        </Col>
      </Row>
    );
  });
}

export default RenderData;
