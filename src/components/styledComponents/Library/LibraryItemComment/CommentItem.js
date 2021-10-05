import styled from 'styled-components';
import { mainTheme } from '../../../../utils/boilerplates/styles';

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 90%;
  border-bottom: 1px solid ${mainTheme.mainColor};
`;
