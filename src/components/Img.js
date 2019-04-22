import React from 'react';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';

const Img = ({ src }) => {
  const publicId = src.split('/').pop();
  return (
    <CloudinaryImage publicId={publicId}>
      <Transformation quality="auto" fetchFormat="auto" />
    </CloudinaryImage>
  );
};

export default Img;
