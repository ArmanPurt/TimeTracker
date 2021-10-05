import styled from 'styled-components';
import { mainTheme } from '../../../../utils/boilerplates/styles';

export const Button = styled.button`
  background-color: ${mainTheme.actionColor};
  color: ${mainTheme.mainColor};
  text-align: center;
  width: 90px;
  height: 45px;
  transition: 0.3s ease-in;
  font-weight: ${mainTheme.boldFont};
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  outline: none;
  transition: 0.3s ease-in;
  &:hover {
    cursor: pointer;
    background-color: ${mainTheme.darkenActionColor};
  }
  ${({ disabled }) =>
    disabled &&
    `
    background-color: ${mainTheme.disabledColor};
    color: ${mainTheme.secondaryColor};
    pointer-events: none;
  `}
`;
