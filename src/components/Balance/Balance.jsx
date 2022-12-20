import React from 'react';
import styles from './styled';

const Balance = () => {
  const { BalanceWrap, Title, Text, CurrentBalance } = styles;
  return (
    <BalanceWrap>
      <Title>your balance</Title>
      <CurrentBalance>
        <span>&#x20b4;</span>
        <Text>Balance</Text>
      </CurrentBalance>
    </BalanceWrap>

  );
};
export default Balance;
