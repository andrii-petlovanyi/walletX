import styled from 'styled-components';

export const ListBox = styled.div`
  background-color: rgba(231, 234, 242, 0.4);
  backdrop-filter: blur(25px);
  width: 100%;
  @media screen and (min-width: 479.98px) {
    padding-top: 32px;
  }

  @media screen and (min-width: 767.98px) {
    padding-top: 16px;
  }

  @media screen and (min-width: 1279px) {
    padding-top: 46px;
    padding-left: 69px;
  }
`;
