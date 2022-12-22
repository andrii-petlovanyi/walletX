import styled from 'styled-components';
import BackgroundPicture from 'images/Currency/CurrencyBackground.png';
import { device } from 'components/Layout/styled';

const CurrencyTable = styled.table`
  width: 100%;
  border: none;
  border-radius: 30px;
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
  text-align: center;
  vertical-align: middle;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: var(--main-bg-cl);
  overflow: hidden;
`;

const Head = styled.thead`
  background: rgba(255, 255, 255, 0.2);
  color: var(--main-bg-cl);
`;
const BodyWrap = styled.tr``;

const HeaderLine = styled.th`
  padding-top: 11px;
  padding-bottom: 12px;
  @media ${device.desktop} {
    padding-top: 17px;
    padding-bottom: 16px;
  }
`;
const Cell = styled.td`
  padding-top: 12px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0px;
  @media ${device.desktop} {
    padding: 20px;
    padding-bottom: 4px;
  }
`;

const Body = styled.tbody`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

const CurrencyWrap = styled.div`
  width: 280px;

  min-height: 174px;
  border-radius: 30px;
  background-color: #4a56e2;
  background-image: url(${BackgroundPicture});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 336px;
    min-height: 182px;
  }
  @media ${device.desktop} {
    width: 393px;
    min-height: 331px;
    margin: 0;
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
