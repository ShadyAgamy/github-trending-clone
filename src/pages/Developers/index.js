import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import {langOptions, dateRangeOptions, selectCustomStyle, DropdownIndicator} from "../../select-data";
import Header from '../../shared/Header';
import fetchedData from '../../data/developers';
import RenderData from '../../shared/renderDevelopers';
import './styles.scss';

function Developers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fetchedData);
  }, []);

  return (
    <>
      <Header desc="These are the developers building the hot tools today." />
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
                      <Select
                        placeholder={<div>Language:</div>}
                        options={langOptions}
                        styles={selectCustomStyle}
                        components={{ DropdownIndicator }}
                      />
                      <Select
                        placeholder={<div>Date Range:</div>}
                        options={dateRangeOptions}
                        styles={selectCustomStyle}
                        components={{ DropdownIndicator }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </nav>
            <main className="trending-main">
              <RenderData data={data} />
            </main>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Developers;
