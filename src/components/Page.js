import React from 'react';
import styled from '@emotion/styled';

import Navbar from '../components/Navbar';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';

const Page = ({ children }) => (
  <Wrapper>
    {children}
    <Footer />
    <Navbar />
    <Drawer />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Page;
