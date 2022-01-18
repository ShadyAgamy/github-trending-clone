import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import Repositories from '../Repositories/';
import Developers from '../Developers';

import './styles.scss';

function HomePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Repositories />}></Route>
        <Route path="/developers" element={<Developers />}></Route>
      </Routes>
    </Router>
  );
}

export default HomePage;
