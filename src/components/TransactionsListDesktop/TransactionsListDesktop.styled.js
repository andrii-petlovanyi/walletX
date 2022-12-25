import styled from 'styled-components';

export const Table = styled.table`
  width: 704px;
  /* height: 250px; */
  border-collapse: collapse;
  overflow: auto;
`;

export const HeaderTr = styled.tr`
  font-family: 'Circe';
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
  background: #ffffff;
  border-width: 0;
  border-color: white;
`;

// export const HeaderTh = styled.th`
//   border-bottom-left-radius: 30px;
//   border-color: #ffffff;
// `;

export const HeaderThDate = styled.th`
  min-width: 75px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const HeaderThType = styled.th`
  min-width: 100px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const HeaderThCategore = styled.th`
  min-width: 139px;
  text-align: left;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const HeaderThComment = styled.th`
  min-width: 117px;
  text-align: left;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const HeaderThSum = styled.th`
  min-width: 101px;
  text-align: right;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const HeaderThBalance = styled.th`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-color: #ffffff;
  min-width: 141px;
  text-align: right;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const StrTr = styled.tr`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  border-bottom: 1px solid #dcdcdf;

  :not(:last-child) {
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
  :last-child {
    border-bottom: 0;
  }
`;

export const StrTdDate = styled.td`
  text-align: right;
`;

export const StrTdType = styled.td`
  text-align: center;
`;

export const StrTdCadegoryId = styled.td`
  text-align: left;
`;

export const StrTdComment = styled.td`
  text-align: left;
  position: relative;

  :hover::before {
    z-index: 3;
    position: absolute;
    padding: 5px;
    opacity: ${props => (props.commentStr.length > 14 ? 1 : 0)};
    content: '${props =>
      props.commentStr.length > 14 ? props.commentStr : ''}';
    background-color: white;
    border-radius: 10px;
    color: black;
    cursor: pointer;
    
  }
`;

export const StrTdAmount = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;

  color: ${props => (props.type === 'INCOME' ? '#24CCA7' : '#ff6596')};
`;

export const StrTdBalanceAfter = styled.td`
  text-align: right;
  padding-right: 28px;
`;
