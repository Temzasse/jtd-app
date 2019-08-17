import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { keyframes } from '@emotion/core';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Lightbox = ({ images, selectedIndex, close }) => {
  const [index, setIndex] = React.useState(selectedIndex);
  const image = images[index];

  function next() {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(i => i + 1);
    }
  }

  function prev() {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(i => i - 1);
    }
  }

  function handleKeyUp(event) {
    event.preventDefault();
    const { keyCode } = event;
    if (keyCode === 37) prev(); // Left Arrow Key
    if (keyCode === 39) next(); // Right Arrow Key
    if (keyCode === 27) close(); // Escape key
  }

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    return () => window.removeEventListener('keyup', handleKeyUp, false);
  }, [handleKeyUp]);

  return (
    <Wrapper>
      <Backdrop onClick={close} />

      <Control onClick={prev}>
        <FiChevronLeft size={40} color="#fff" />
      </Control>

      <ImageWrapper>
        <LightboxImage fluid={image} aspectRatio={image.aspectRatio} />
      </ImageWrapper>

      <Control onClick={next}>
        <FiChevronRight size={40} color="#fff" />
      </Control>
    </Wrapper>
  );
};

const fadeInAnim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleAnim = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  animation: ${fadeInAnim} 100ms ease-in forwards;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HEIGHT = 85;

const LightboxImage = styled(Image)`
  display: inline-block;
  width: calc(${props => props.aspectRatio} * ${HEIGHT}vh);
  height: ${HEIGHT}vh;
  animation: ${scaleAnim} 150ms ease-in forwards;
  pointer-events: none;
  border-radius: 12px;
  box-shadow: 0px 6px 32px rgba(0, 0, 0, 0.5);
  will-change: transform, opacity;

  & img {
    border-radius: 12px;
  }
`;

const Control = styled.div`
  height: 100%;
  flex: none;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: 1;
  opacity: 0.2;

  :hover {
    opacity: 0.9;
  }
`;

export default Lightbox;
