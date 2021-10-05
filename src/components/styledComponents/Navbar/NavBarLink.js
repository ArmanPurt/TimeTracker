import styled from 'styled-components';
import { mainTheme } from '../../../utils/boilerplates/styles';
import { Link } from 'react-router-dom';

export const NavBarLink = styled(Link)`
  color: ${mainTheme.navBarLinkColor};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: ${mainTheme.boldFont};
`;
