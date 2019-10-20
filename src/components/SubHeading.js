import styled from '@emotion/styled';

const SubHeading = styled.h4`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.color || props.theme.black};
  margin: 8px 0px;
  line-height: 1.5;
`;

export default SubHeading;
