import { Box } from 'components/Box';
import colorsDonut from 'helpers/colorsDonut';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTransactionSummary from 'redux/statistic/statistic-operations';
import {
  ColorLegend,
  DropDown,
  DropDownWrapper,
  StatExp,
  StatInc,
  StatLabel,
  TabItem,
  Table,
  TableData,
  TableDataAmount,
  TableHeaderL,
  TableHeaderR,
  TableHeaderWrapper,
} from './styled';

const monthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  ' December',
];
function DiagramTab() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const dispatch = useDispatch();

  const statData = useSelector(state => state.statistic.statistic);

  useEffect(() => {
    if (month.length > 0 && year.length > 0)
      dispatch(getTransactionSummary({ month, year }));
  }, [month, year, dispatch]);

  const filteredExp = statData?.categoriesSummary?.filter(
    el => el.type !== 'INCOME'
  );

  const handleChangeMonth = e => {
    setMonth(e.target.value);
  };
  const handleChangeYear = e => {
    setYear(e.target.value);
  };
  return (
    <Box marginTop="20px">
      <DropDownWrapper>
        <label>
          <DropDown name="month" value={month} onChange={handleChangeMonth}>
            <option value="">
              {/* <DropDownTitle> Month</DropDownTitle> */}
              Month
            </option>

            {monthsList.map((monthEl, index) => (
              <option key={monthEl} value={index + 1}>
                {monthEl}
              </option>
            ))}
          </DropDown>
        </label>
        <label>
          <DropDown name="year" value={year} onChange={handleChangeYear}>
            <option value="">Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </DropDown>
        </label>
      </DropDownWrapper>
      <Table>
        <thead>
          <TableHeaderWrapper>
            <TableHeaderL scope="col">
              <span>Category </span>
            </TableHeaderL>
            <TableHeaderR scope="col">
              <span>Sum</span>
            </TableHeaderR>
          </TableHeaderWrapper>
        </thead>
        {filteredExp?.length > 0 && (
          <>
            <tbody>
              {filteredExp?.map(({ name, total }, ind) => {
                return (
                  <TabItem key={name}>
                    <TableData scope="row">
                      <ColorLegend
                        style={{ backgroundColor: colorsDonut[ind] }}
                      />
                      {name}
                    </TableData>
                    <TableDataAmount>{Math.abs(total)}</TableDataAmount>
                  </TabItem>
                );
              })}
            </tbody>
          </>
        )}
      </Table>
      {filteredExp?.length > 0 && (
        <>
          <Box
            display="flex"
            pl="20px"
            pr="10px"
            flexDirection="column"
            gridGap="20px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gridGap="20px"
            >
              <StatLabel>Expenses:</StatLabel>
              <StatExp>{Number(statData.expenseSummary).toFixed(2)}</StatExp>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gridGap="20px"
            >
              <StatLabel>Income:</StatLabel>
              <StatInc>{Number(statData.incomeSummary).toFixed(2)}</StatInc>
            </Box>
          </Box>
        </>
      )}
      {!filteredExp && <>No data statistic...</>}
      {filteredExp?.length === 0 && <>No data statistic for this period...</>}
    </Box>
  );
}

export default DiagramTab;
