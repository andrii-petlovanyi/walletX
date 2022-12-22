import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import moment from '../../../node_modules/moment/moment';
import { transactionsListSort } from 'components/TransactionsListSort/TransactionsListSort';
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

const TransactionsListDesktop = () => {

  const dispatch = useDispatch();
  const elementsList = useSelector(state => state.transaction.transactions);
  const category = useSelector(state => state.category.category);

  useEffect(() => {
    dispatch(operations.getTransactions());
  }, [dispatch]);

  if (category.length === 0 || elementsList.length === 0) return;
    
  const sortElementsList = transactionsListSort(elementsList, category);
 
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
        {sortElementsList?.map(e => {
          return (
            <StrTr key={e.id}> 
              <StrTdDate>{moment(e.transactionDate).format('DD.MM.YY')}</StrTdDate>
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
