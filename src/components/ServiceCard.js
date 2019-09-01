import React from 'react';
import styled from '@emotion/styled';
import { FiCheck, FiCoffee, FiBox, FiBriefcase } from 'react-icons/fi';
import { TiLightbulb } from 'react-icons/ti';
import { FaPaintRoller, FaCouch, FaBuilding } from 'react-icons/fa';
import { MdContentCut } from 'react-icons/md';
import { dotGrid } from '../utils';

const typeToIcon = {
  coffee: FiCoffee,
  box: FiBox,
  bulb: TiLightbulb,
  paint: FaPaintRoller,
  furniture: FaCouch,
  textile: MdContentCut,
  building: FaBuilding,
  briefcase: FiBriefcase,
};

const ServiceCard = ({ title = '', items = [], iconType = 'map' }) => {
  const TypeIcon = typeToIcon[iconType];

  return (
    <Wrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>

        <CardList>
          {items.map((item, index) => (
            <CardListItem key={index}>
              <CardListItemBullet>
                <FiCheck />
              </CardListItemBullet>
              {item}
            </CardListItem>
          ))}
        </CardList>
      </CardContent>

      <CardType>
        <TypeIcon size={40} />
      </CardType>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  position: relative;
  ${dotGrid()}
`;

const CardContent = styled.div`
  padding: 32px 112px 32px 32px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const CardType = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(30%, -50%);
  background-color: ${props => props.theme.primary[200]};
  color: ${props => props.theme.primary[600]};
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &::before {
    content: ' ';
    position: absolute;
    z-index: -1;
    background-color: ${props => props.theme.primary[100]};
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

const CardTitle = styled.strong`
  font-size: 20px;
  color: ${props => props.theme.black};
  padding-left: 36px;
`;

const CardList = styled.ul`
  padding: 0;
`;

const CardListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.6;
`;

const CardListItemBullet = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.primary[200]};
  color: ${props => props.theme.primary[700]};
  border-radius: 50%;
  flex: none;
`;

export default ServiceCard;
