import styled from 'styled-components';
import { mainTheme } from '../../../utils/boilerplates/styles';
import { Link } from 'react-router-dom';

export const LibraryLink = styled(Link)`
  color: ${mainTheme.secondaryColor};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-weight: ${mainTheme.boldFont};
`;
