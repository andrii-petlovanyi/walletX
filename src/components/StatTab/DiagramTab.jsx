import { Box } from 'components/Box';
import colorsDonut from 'helpers/colorsDonut';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTransactionSummary from 'redux/statistic/statistic-operations';
import Select from 'react-select';
import {
  ColorLegend,
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
import statSelectStyles from 'helpers/statSelectStyles';

const monthsList = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

const yearsList = [
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];
function DiagramTab() {
  let statisticLS = JSON.parse(localStorage.getItem('statistic')) || {
    month: '',
    year: '',
  };
  const [month, setMonth] = useState(statisticLS.month || '');
  const [year, setYear] = useState(statisticLS.year || '');
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
    console.log(e.value);
    const month = e.value;
    statisticLS.month = month;
    setMonth(month);
    localStorage.setItem('statistic', JSON.stringify(statisticLS));
  };
  const handleChangeYear = e => {
    const year = e.value;
    statisticLS.year = year;
    setYear(year);
    localStorage.setItem('statistic', JSON.stringify(statisticLS));
  };
  return (
    <Box marginTop="20px">
      <DropDownWrapper>
        <Select
          placeholder="Month"
          options={monthsList}
          onChange={e => handleChangeMonth(e)}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={statSelectStyles}
        />
        <Select
          placeholder="Year"
          options={yearsList}
          onChange={e => handleChangeYear(e)}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={statSelectStyles}
        />
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
