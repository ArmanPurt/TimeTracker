import styled from 'styled-components';
import { mainTheme } from '../../../utils/boilerplates/styles';

export const LibraryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${mainTheme.darkenMainColor};
  margin: 10px 0;
  width: 90%;
  padding: 25px 0;
  transition: 0.3s ease-in;
  border-radius: 8px;
  border: 1px solid ${mainTheme.mainColor};
  &:hover {
    box-shadow: 0 0 5pt 0.5pt #d3d3d3;
    cursor: pointer;
  }
`;
