import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  /* margin-left: -6px;
  margin-right: -6px; */
  width: 100%;
  max-width: 320px;

  @media screen and (min-width: 480px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 0;
    width: 768px;
    gap: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
    margin: 0;
    margin-left: 30px;
    width: 100%;
    max-width: 100%;
    gap: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DropDown = styled.select`
  box-sizing: border-box;

  // left: 869px;
  // top: 177px;
  background: none;
  width: 181px;
  border: 1px solid #000000;
  border-radius: 30px;
  padding: 12px 0 14px 20px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const TabItem = styled.tr`
  border-bottom: 2px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const Table = styled.table`
  width: 100%;
  max-width: 320px;
  padding-top: 20px;
  padding-bottom: 33px;
  margin: 0 auto;

  /* @media screen and (min-width: 480px) {
    max-width: 320px;
  } */

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    max-width: 395px;
  }
`;

export const TableHeaderWrapper = styled.tr`
  background: #ffffff;
  border-color: #ffffff;
  border: none;
  /* margin: 0; */
`;

export const TableHeaderL = styled.th`
  padding: 15px;
  border-top-left-radius: 30px;
  border: none;
  border-bottom-left-radius: 30px;
`;
export const TableHeaderR = styled.th`
  padding: 15px;
  border-top-right-radius: 30px;
  border: none;

  border-bottom-right-radius: 30px;
`;

export const TableData = styled.td`
  padding: 15px;
  border: 1px solid #dcdcdf;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;

  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const TableDataAmount = styled.td`
  padding: 15px;
  text-align: end;
  border: 1px solid #dcdcdf;
  border: none;
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

export const StatLabel = styled.p`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const StatInc = styled.p`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #24cca7;
`;

export const StatExp = styled.p`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ff6596;
`;

export const ColorLegend = styled.p`
  width: 24px;
  height: 24px;
`;

export const DonutSection = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`;
