import React from 'react';
import styles from './styled';

const Currency = () => {
  const currencies = [
    {
      ccy: 'EUR',
      base_ccy: 'UAH',
      buy: '19.20000',
      sale: '20.00000',
    },
    {
      ccy: 'USD',
      base_ccy: 'UAH',
      buy: '15.50000',
      sale: '15.85000',
    },
  ];
  return (
    <styles.CurrencyTable>
      <styles.Head>
        <tr>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
      </styles.Head>
      <styles.Body>
        {currencies.map(({ ccy, buy, sale }) => (
          <tr key={ccy}>
            <styles.Cell>{ccy}</styles.Cell>
            <styles.Cell>{buy}</styles.Cell>
            <styles.Cell>{sale}</styles.Cell>
          </tr>
        ))}
      </styles.Body>
    </styles.CurrencyTable>
  );
};
export default Currency;
