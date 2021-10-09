import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  background-color: #f1f1f1;
  display: grid;
  place-items: center;
  width: 100%;
`;

export const StyledLayout = styled.div`
  flex-basis: calc(11 / 12 * 100%);
  display: grid;
  height: 100%;
  padding: 30px;
  max-width: 1500px;
  min-width: 1200px;
`;
