import styled from 'styled-components';
import { mainTheme } from '../../../../utils/boilerplates/styles';

export const TextArea = styled.textarea`
  flex: 0.8;
  position: relative;
  transition: 0.3s ease-in;
  background-color: ${mainTheme.mainColor};
`;
