import React from 'react';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';

const Img = ({ src, children, ...rest }) => {
  console.log({ src });
  const publicId = src.split('/upload/').pop();
  return (
    <CloudinaryImage publicId={publicId} {...rest}>
      <Transformation quality="auto" fetchFormat="auto" />
      {children}
    </CloudinaryImage>
  );
};

export default Img;
