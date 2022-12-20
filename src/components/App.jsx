import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Test
      </div>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>}></Route>
          <Route path="diagram" element={<div>Statistics</div>}></Route>
        </Route>
      </Routes> */}
    </>
  );
};
