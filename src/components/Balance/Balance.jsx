import React from 'react';
import styles from './styled';

const Balance = () => {
  return (
    <styles.BalanceWrap>
      <styles.Title>your balance</styles.Title>
      <styles.CurrentBalance>
        <span>&#x20b4;</span>
        <stylesText>Balance</stylesText>
      </styles.CurrentBalance>
    </styles.BalanceWrap>
  );
};
export default Balance;
