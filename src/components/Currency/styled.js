import styled from 'styled-components';

const CurrencyTable = styled.table`
  width: 393px;
  background: var(--accent-active-cl);
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
  color: var(--main-bg-cl);
  overflow: hidden;
`;
const Head = styled.thead`
  /* height: 60px; */
  padding: 17px 44px;
  background: rgba(255, 255, 255, 0.2);
  color: var(--main-bg-cl);
  border-collapse: collapse;
  border: none;
`;
const HeaderLine = styled.th`
  padding: 17px 44px;
`;
const Cell = styled.td``;

const Body = styled.tbody`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

const styles = { CurrencyTable, Head, Cell, Body, HeaderLine };
export default styles;
