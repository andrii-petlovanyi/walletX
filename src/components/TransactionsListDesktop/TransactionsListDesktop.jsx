import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  Table,
  HeaderTr,
  StrTr,
  StrTdDate,
  StrTdType,
  StrTdCadegoryId,
  StrTdComment,
  StrTdAmount,
  StrTdBalanceAfter,
  HeaderThDate,
  HeaderThBalance,
  HeaderThCategore,
  HeaderThComment,
  HeaderThType,
  HeaderThSum,
} from './TransactionsListDesktop.styled';
import operations from 'redux/transactions/transactions-operations';

// function getTransList() {
//   const transList = [
//     {
//       id: '1',
//       transactionDate: '04.01.19',
//       type: '-',
//       categoryId: 'Other',
//       // userId: 'string',
//       comment: 'Gift for you wife',
//       amount: 300.0,
//       balanceAfter: 6900.0,
//     },
//     {
//       id: '2',
//       transactionDate: '05.01.19',
//       type: 'INCOME',
//       categoryId: 'Income',
//       // userId: 'string',
//       comment: 'January bonus',
//       amount: 8000.0,
//       balanceAfter: 14900.0,
//     },
//     {
//       id: '3',
//       transactionDate: '07.01.19',
//       type: '-',
//       categoryId: 'Car',
//       // userId: 'string',
//       comment: 'Oil',
//       amount: 1000.0,
//       balanceAfter: 13900.0,
//     },
//     {
//       id: '4',
//       transactionDate: '07.01.19',
//       type: '-',
//       categoryId: 'Products',
//       // userId: 'string',
//       comment: 'Vegetables for week',
//       amount: 280.0,
//       balanceAfter: 13870.0,
//     },
//     {
//       id: '5',
//       transactionDate: '07.01.19',
//       type: 'INCOME',
//       categoryId: 'Income',
//       // userId: 'string',
//       comment: 'Gift',
//       amount: 1000.0,
//       balanceAfter: 14870.0,
//     },
//   ];

//   return transList;
// }

const TransactionsListDesktop = () => {
  const dispatch = useDispatch();
  const elementsList = useSelector(state => state.transaction.transactions);
  const category = useSelector(state => state.category.category);
  //   const isLoading = useSelector(state => state.transaction.loadingAddTrans);

  useEffect(() => {
    dispatch(operations.getTransactions());
  }, [dispatch]);

  if (category.length === 0 || elementsList.length === 0) return;

  // console.log(Date(elementsList[0].transactionDate));
  // console.log(elementsList);
  return (
    <Table>
      <thead>
        <HeaderTr>
          <HeaderThDate>Date</HeaderThDate>
          <HeaderThType>Type</HeaderThType>
          <HeaderThCategore>Category</HeaderThCategore>
          <HeaderThComment>Comment</HeaderThComment>
          <HeaderThSum>Sum</HeaderThSum>
          <HeaderThBalance>Balance</HeaderThBalance>
        </HeaderTr>
      </thead>
      <tbody>
        {elementsList?.map(e => {
          return (
            <StrTr key={e.id}>
              <StrTdDate>{e.transactionDate}</StrTdDate>
              <StrTdType>{e.type === 'INCOME' ? '+' : '-'}</StrTdType>
              <StrTdCadegoryId>
                {category?.find(c => c.id === e.categoryId).name}
              </StrTdCadegoryId>
              <StrTdComment>{e.comment}</StrTdComment>
              <StrTdAmount type={e.type}>{e.amount.toFixed(2)}</StrTdAmount>
              <StrTdBalanceAfter>{e.balanceAfter.toFixed(2)}</StrTdBalanceAfter>
            </StrTr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionsListDesktop;
