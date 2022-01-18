import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

import "./styles.scss"

function RenderRepos({ data }) {
  return data.map((repo) => {
    const { rank, username, repositoryName, url, description, language, totalStars, forks, builtBy,starsSince } = repo;
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
        <Col lg={{ span: 2, offset: 4 }}>
          <div className="d-flex flex-column align-items-end giveStar">
            <Button variant="secondary">
              <i className="far fa-star"></i> Star
            </Button>
            <span className="repo-numbers"><i className="far fa-star"></i> {starsSince} stars today</span>
          </div>
        </Col>
      </Row>
    );
  });
}

export default RenderRepos;
