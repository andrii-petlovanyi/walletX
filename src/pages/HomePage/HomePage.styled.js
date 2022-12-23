import styled from 'styled-components';

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 70vh;
  overflow-y: scroll;
  @media screen and (min-width: 1279px) {
    display: flex;
  }
`;
