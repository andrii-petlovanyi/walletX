import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 32px 16px;
  width: 100%;
`;

export const DropDown = styled.select`
  box-sizing: border-box;

  // left: 869px;
  // top: 177px;
  width: 181px;
  border: 1px solid #000000;
  border-radius: 30px;
  padding: 12px 0 14px 20px;
`;

export const TabHeader = styled.h1`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
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
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const TabItem = styled.tr`
  border: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const Table = styled.table`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 33px;
`;

export const TableHeader = styled.th`
  background: #ffffff;
  border-radius: 30px;
  padding: 15px;

  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const DoughnutBalance = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const ChartContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
`;
