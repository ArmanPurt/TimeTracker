import styled from 'styled-components';
import { Input } from '../common/inputs/Input';

export const TimeAssignerInput = styled(Input)`
  flex: 1 1 0px;
  margin: 0 10px;
  height: 25px;
  border-radius: 8px;
  border: solid 1.5px #d3d3d3;
  &:hover {
    box-shadow: 0 0 5pt 0.5pt #d3d3d3;
  }
  &:focus {
    box-shadow: 0 0 5pt 2pt #d3d3d3;
    outline-width: 0px;
  }
`;
