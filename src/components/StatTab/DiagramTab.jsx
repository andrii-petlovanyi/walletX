import { Box } from 'components/Box';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTransactionSummary from 'redux/statistic/statistic-operations';
import {
  DropDown,
  // DropDownTitle,
  DropDownWrapper,
  TabItem,
  Table,
  TableData,
  TableDataAmount,
  TableHeader,
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

  const handleChangeMonth = e => {
    setMonth(e.target.value);
  };
  const handleChangeYear = e => {
    setYear(e.target.value);
  };
  return (
    <Box marginTop="60px">
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
          <tr>
            <TableHeader colSpan={2}>
              <span>Category </span>
              <span>Sum</span>
            </TableHeader>
          </tr>
        </thead>
        {statData?.categoriesSummary?.length > 0 && (
          <tbody>
            {statData?.categoriesSummary?.map(({ name, total }) => {
              return (
                <TabItem key={name}>
                  <TableData>{name}</TableData>
                  <TableDataAmount>{total}</TableDataAmount>
                </TabItem>
              );
            })}
          </tbody>
        )}
      </Table>
      <p>
        <span>Expenses</span>
        <span>{statData.expenseSummary}</span>
      </p>
      <p>
        <span>Income</span>
        <span>{statData.incomeSummary}</span>
      </p>
    </Box>
  );
}

export default DiagramTab;
