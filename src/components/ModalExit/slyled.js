import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  left: -100px;
  top: 45px;
  width: 380px;
  height: 150px;
  padding: 10px 10px;
  border-radius: 20px;
  box-shadow: 0 0 0 1px #dadce0;
  background-color: var(--main-bg-cl);
  color: var(--main-text-cl);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  z-index: 9999;

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  button {
    width: 80px;
    height: 35px;
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
