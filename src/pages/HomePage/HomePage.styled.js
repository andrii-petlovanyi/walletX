import styled from 'styled-components';

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 65vh;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 45vh;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 39px;
    display: flex;
    height: 70vh;
  }
`;
