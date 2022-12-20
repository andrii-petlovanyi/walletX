import { Box } from 'components/Box';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTransactionSummary from 'redux/statistic/statistic-operations';
import {
  DropDown,
  DropDownTitle,
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
  console.log(statData);

  // month:
  // year:

  useEffect(() => {
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
            <option value="" selected>
              <DropDownTitle> Month</DropDownTitle>
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
            <option value="" selected>
              Year
            </option>
            <option value="">2022</option>
            <option value="">2021</option>
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
        <tbody>
          {statData.map(({ type, amount }) => {
            return (
              <TabItem>
                <TableData>{type}</TableData>
                <TableDataAmount>{amount}</TableDataAmount>
              </TabItem>
            );
          })}
        </tbody>
      </Table>
    </Box>
  );
}

export default DiagramTab;
