import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  width: 250px;
  height: 120px;
  padding: 10px 10px;
  border-radius: 20px;
  background-color: white;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  button {
    width: 80px;
    height: 20px;
    border: none;
    background: #24cca7;
    border-radius: 20px;

    color: #ffffff;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    /* text-align: center; */
    letter-spacing: 0.1em;
    text-transform: uppercase;
    :hover {
      background: #307957;
      cursor: pointer;
    }
  }
`;
