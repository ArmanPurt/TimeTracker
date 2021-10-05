import styled, { createGlobalStyle } from 'styled-components';

export const AppLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AppLayoutGlobal = createGlobalStyle`
  body, html, #root, #root>div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
  }
`;
