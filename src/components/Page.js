import React from 'react';

import Navbar from '../components/Navbar';
import Drawer from '../components/Drawer';

const Page = ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children}
    <Navbar />
    <Drawer />
  </div>
);

export default Page;
