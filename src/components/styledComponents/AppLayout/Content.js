import styled from 'styled-components';
import { mainTheme } from '../../../utils/boilerplates/styles';
import { H1 } from '../common/headers/H1';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: scroll;
`;

export const ContentHeader = styled(H1)`
  color: ${mainTheme.secondaryColor};
  text-align: center;
`;
