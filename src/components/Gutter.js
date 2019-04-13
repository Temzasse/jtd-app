import styled from '@emotion/styled';
import { media } from '../utils';

const DEFAULT_PAD = 16;

const getWidthOrHeight = dir => {
  switch (dir) {
    case 'horizontal':
      return 'width';
    case 'vertical':
      return 'height';
    default:
      return 'width';
  }
};

const getDim = props => {
  const amount = props.amount || DEFAULT_PAD;
  return `${getWidthOrHeight(props.dir)}: ${amount}px;`;
};

const getMediaDim = (props, { dir, amount: mAmount }) => {
  const amount = mAmount || props.amount || DEFAULT_PAD;
  return `${getWidthOrHeight(dir || props.dir)}: ${amount}px;`;
};

const Gutter = styled.div`
  height: 0px;
  ${props => getDim(props)}
  ${props => props.sm && media.sm`${getMediaDim(props, props.sm)}`}
  ${props => props.md && media.md`${getMediaDim(props, props.md)}`}
  ${props => props.lg && media.lg`${getMediaDim(props, props.lg)}`}
`;

/*
<Gutter
  amount='32px'
  xs={{ dir: 'vertical', amount: '16px' }}
  sm={{ amount: '16px' }}
  lg={{ dir: 'vertical', amount: '32px' }}
  xl={{ dir: 'horizontal', amount: '40px' }}
/>
*/

export default Gutter;
