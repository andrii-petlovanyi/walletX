import styled from 'styled-components';

export const Table = styled.table`
  width: 280px;
  height: 282px;
  background: #ffffff;
  border-collapse: collapse;
  margin-bottom: 8px;

  border-radius: 10px;
`;

export const StrTr = styled.tr`
  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const TdBorder = styled.td`
  --trans-color: ${props => (props.type === 'INCOME' ? '#24CCA7' : '#ff6596')};
  width: 5px;
  background-color: var(--trans-color);
`;

export const TdBorderDate = styled.td`
  --trans-color: ${props => (props.type === 'INCOME' ? '#24CCA7' : '#ff6596')};
  width: 5px;
  background-color: var(--trans-color);
  border-top-left: 1px solid var(--trans-color);
  border-top-left-radius: 10px;
`;

export const TdBorderBalance = styled.td`
  --trans-color: ${props => (props.type === 'INCOME' ? '#24CCA7' : '#ff6596')};
  width: 5px;
  background-color: var(--trans-color);
  border-bottom-left: 1px solid var(--trans-color);
  border-bottom-left-radius: 10px;
`;

export const TdName = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
  padding-left: 15px;
  text-align: left;
`;

export const TdData = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
  padding-right: 20px;
  color: #000000;
`;

export const TdDataComment = styled.td`
  position: relative;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
  padding-right: 20px;
  color: #000000;
`;

export const TdDataSum = styled.td`
  --trans-color: ${props => (props.type === 'INCOME' ? '#24CCA7' : '#ff6596')};
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
  padding-right: 20px;
  color: var(--trans-color);
`;
