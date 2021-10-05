import styled from 'styled-components';
import { mainTheme } from '../../../../utils/boilerplates/styles';

export const DropdownWrapper = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  position: relative;
`;

export const DropdownComponent = styled.div`
  padding: 6px 0px;
  border: 1px solid ${mainTheme.secondaryColor};
  border-radius: 5px;
  transition: 0.3s ease-in;
  background-color: ${mainTheme.mainColor};
  &:after {
    content: '';
    position: absolute;
    right: 10px;
    top: 16px;
    border: 7px solid transparent;
    border-color: ${mainTheme.secondaryColor} transparent transparent
      transparent;
  }
  &:hover {
    background-color: ${mainTheme.darkenMainColor};
    color: ${mainTheme.secondaryColor};
    cursor: pointer;
  }
  ${({ isActive }) =>
    isActive &&
    `
    top: 8px;
    border-color: transparent transparent #fff transparent;
  `}
`;

export const DropdownList = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;
  position: absolute;
  z-index: 2;
  width: 87%;
`;

export const DropdownListItem = styled.li`
  list-style-type: none;
  padding: 6px 20px;
  background-color: ${mainTheme.mainColor};
  border-bottom: 1px solid ${mainTheme.secondaryColor};
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${mainTheme.darkenMainColor};
    color: ${mainTheme.secondaryColor};
  }
  ${({ inactive }) =>
    inactive &&
    `
    pointer-events: none;
  `}
`;
