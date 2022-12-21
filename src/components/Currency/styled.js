import styled from 'styled-components';
import BackgroundPicture from 'images/Currency/CurrencyBackground.png';

const CurrencyTable = styled.table`
  width: 100%;
  /* background: var(--accent-active-cl); */
  border: none;
  border-radius: 30px;
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: var(--main-bg-cl);
  overflow: hidden;

  /* background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -7.46%,
    rgba(255, 255, 255, 0) 100%
  ); */
  /* background-position: left 18px top 539px; */
`;

const Head = styled.thead`
  /* height: 60px; */
  padding: 17px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: var(--main-bg-cl);
  border-collapse: collapse;
  border: none;
`;
const BodyWrap = styled.tr`
  margin-bottom: 20px;
`;
const HeaderLine = styled.th`
  padding: 17px 5px;
`;
const Cell = styled.td`
  padding: 5px;
`;

const Body = styled.tbody`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

const CurrencyWrap = styled.div`
  /* padding: 12px 20px 16px; */
  width: 280;
  height: 174px;
  border-radius: 30px;

  background-color: #4a56e2;
  background-image: url(${BackgroundPicture});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;

  @media screen and (min-width: 480px) {
    width: 393px;
    height: 331px;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 182px;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
    height: 331px;
  }
`;

const styles = {
  CurrencyWrap,
  CurrencyTable,
  Head,
  Cell,
  Body,
  HeaderLine,
  BodyWrap,
};
export default styles;

// ======
