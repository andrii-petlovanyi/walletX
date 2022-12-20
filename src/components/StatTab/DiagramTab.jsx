import React from 'react';
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


function DiagramTab() {
  const monthsList = ['January', 'Februery', 'March']
  
  const tabData = [
    {
      type: 'Main expenses',
      amount: 3800.0,
    },
    {
      type: 'Products',
      amount: 3800.74,
    },
    {
      type: 'Car',
      amount: 1500,
    },
    {
      type: 'Self care',
      amount: 800,
    },
  ];

  return (
    <div>
      <DropDownWrapper>
        <label>
          <DropDown name="month">
            <option value="xs" selected>
              <DropDownTitle> Month</DropDownTitle>
            </option>

            {monthsList.map(month => (
              <option key={month} value="text">
                {month}
              </option>
            ))}
          </DropDown>
        </label>
        <label>
          <DropDown name="" id="">
            <option value="" selected>
              Year
            </option>
            <option value="current">2022</option>
            <option value="past">2021</option>
          </DropDown>
        </label>
      </DropDownWrapper>
      <Table>
        <TableHeader>
          <tr>
            <th colSpan={2}>
              <span>Category </span>
              <span>Sum</span>
            </th>
          </tr>
        </TableHeader>
        <tbody>
          {Object.values(tabData).map(({ type, amount }) => {
            return (
              <TabItem>
                <TableData>{type}</TableData>
                <TableDataAmount>{amount}</TableDataAmount>
              </TabItem>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DiagramTab;
