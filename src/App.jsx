import React from 'react';
import { Routes, Route } from 'react-router';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;