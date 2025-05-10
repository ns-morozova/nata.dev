import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts';
import { Home } from './pages';
import { Cases } from './pages';
import { Services } from './pages';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cases" element={<Cases />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
