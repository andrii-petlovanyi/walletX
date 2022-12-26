import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  TdBorder,
  StrTr,
  TdName,
  TdData,
  TdDataSum,
  Table,
  TdBorderDate,
  // TdBorderBalance,
  TdDataComment,
} from './TransactionsListMobile.styled';
import { transactionsListSort } from 'components/TransactionsListSort/TransactionsListSort';
import moment from '../../../node_modules/moment/moment';
import operations from 'redux/transactions/transactions-operations';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const TransactionsListMobile = () => {
  const VISIBLE_SYMBOL_COUNT = 14;
  const dispatch = useDispatch();
  const elementsList = useSelector(state => state.transaction.transactions);
  const category = useSelector(state => state.category.category);

  useEffect(() => {
    dispatch(operations.getTransactions());
  }, [dispatch]);

  if (category.length === 0 || elementsList.length === 0) return;

  const sortElementsList = transactionsListSort(elementsList, category);

  return sortElementsList.map(e => {
    return (
      <Table key={e.id}>
        <tbody>
          <StrTr>
            <TdBorderDate type={e.type} />
            <TdName>Date</TdName>
            <TdData>{moment(e.transactionDate).format('DD.MM.YY')}</TdData>
          </StrTr>
          <StrTr>
            <TdBorder type={e.type} />
            <TdName>Type</TdName>
            <TdData>{e.type === 'INCOME' ? '+' : '-'}</TdData>
          </StrTr>
          <StrTr>
            <TdBorder type={e.type} />
            <TdName>Category</TdName>
            <TdData>{category?.find(c => c.id === e.categoryId).name}</TdData>
          </StrTr>
          <StrTr>
            <TdBorder type={e.type} />
            <TdName>Comment</TdName>
            {e?.comment?.length > VISIBLE_SYMBOL_COUNT ? (
              <Tippy content={e.comment}>
                <TdDataComment>
                  {`${e.comment.substr(0, VISIBLE_SYMBOL_COUNT)}...`}
                </TdDataComment>
              </Tippy>
            ) : (
              <TdDataComment>{e.comment}</TdDataComment>
            )}
          </StrTr>
          <StrTr>
            <TdBorder type={e.type} />
            <TdName>Sum</TdName>
            <TdDataSum type={e.type}>{e.amount.toFixed(2)}</TdDataSum>
          </StrTr>
          {/* <StrTr>
            <TdBorderBalance type={e.type} />
            <TdName>Balance</TdName>
            <TdData>{e.balanceAfter.toFixed(2)}</TdData>
          </StrTr> */}
        </tbody>
      </Table>
    );
  });
};

export default TransactionsListMobile;
