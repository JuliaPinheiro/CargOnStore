// Router.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductListPage from '../pages/ProductListPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductListPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
