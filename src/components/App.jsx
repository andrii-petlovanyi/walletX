import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import ModalWindow from './ModalWindow/ModalWindow';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="diagram" element={<div>Statistics</div>} />
        </Route>
      </Routes>
    </>
  );
};
