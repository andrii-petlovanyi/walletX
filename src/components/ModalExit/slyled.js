import styled from 'styled-components';
import { device } from 'components/Layout/styled';

const ModalStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 0 0 1px #dadce0;
  background-color: var(--main-bg-cl);
  color: var(--main-text-cl);
  z-index: 9999;
  min-width: 250px;
  min-height: 120px;
  left: -180px;
  top: 55px;
  gap: 25px;
  padding: 15px;

  @media ${device.tablet} {
    min-width: 250px;
    height: 120px;
    left: -200px;
    top: 45px;
    gap: 25px;
    padding: 15;
  }
  @media ${device.desktop} {
    gap: 30px;
    left: -250px;
    top: 45px;
    width: 380px;
    height: 150px;
    padding: 10px 10px;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const ButtonYes = styled.button`
  min-width: 80px;
  min-height: 35px;
  border: none;
  background: #24cca7;
  border-radius: 20px;

  color: #ffffff;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  letter-spacing: 0.1em;
  text-transform: uppercase;
  :hover {
    background: #307957;
    cursor: pointer;
  }
`;
const ButtonNo = styled.button`
  min-width: 80px;
  min-height: 35px;
  border: 1px solid #4a56e2;
  background: #fff;
  border-radius: 20px;

  color: #4a56e2;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`;
const styles = { ModalStyled, ButtonWrap, ButtonYes, ButtonNo };
export default styles;
