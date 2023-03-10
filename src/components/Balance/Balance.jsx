import { numberSpace } from 'helpers/numberSpace';
import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import styles from './styled';

const Balance = () => {
  const { BalanceWrap, Title, Text, CurrentBalance } = styles;
  const balance = useSelector(authSelectors.getUserBalance);
  return (
    <BalanceWrap>
      <Title>your balance</Title>
      <CurrentBalance>
        <span>&#x20b4;</span>
        <Text>{numberSpace(balance)}</Text>
      </CurrentBalance>
    </BalanceWrap>
  );
};
export default Balance;
