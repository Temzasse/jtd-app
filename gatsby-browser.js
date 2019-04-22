import './src/index.css';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { CloudinaryContext } from 'cloudinary-react';
import theme from './src/theme';

const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;

export const wrapRootElement = ({ element }) => {
  return (
    <CloudinaryContext cloudName={CLOUDINARY_NAME}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </CloudinaryContext>
  );
};
