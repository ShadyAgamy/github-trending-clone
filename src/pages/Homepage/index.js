import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../../shared/Header';
import Repositories from '../../shared/Repositories';
import Developers from '../../shared/Developers';

import './styles.scss';

function HomePage() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Repositories />}></Route>
        <Route path="/developers" element={<Developers />}></Route>
      </Routes>
    </Router>
  );
}

export default HomePage;
