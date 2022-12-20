import styled from 'styled-components';

export const MainContainer = styled.tr`
  background: #e7eaf2;

`;

export const DropDown = styled.select`
  box-sizing: border-box;
 
  left: 869px;
  top: 177px;

  border: 1px solid #000000;
  border-radius: 30px;
  padding: 12px 0 14px 20px;
`;

export const DropDownTitle = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  
`;

export const DropDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const TabItem = styled.tr`
  border: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const Table = styled.table`
  padding-top: 20px;
  padding-bottom: 33px;
  
`;

export const TableHeader = styled.thead`
  background: #ffffff;
  border-radius: 30px;
  paddind: 16px 28px;
`;


export const TableData = styled.td`
  padding: 15px;
  border: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const TableDataAmount = styled.td`
  padding: 15px;
  text-align: end;
  border: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;