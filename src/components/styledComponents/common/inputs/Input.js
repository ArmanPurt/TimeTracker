import styled from 'styled-components';
import { mainTheme } from '../../../../utils/boilerplates/styles';

export const Input = styled.input`
  display: inline-block;
  min-width: 250px;
  text-align: center;
  position: relative;
  transition: 0.3s ease-in;
  background-color: ${mainTheme.mainColor};
`;
