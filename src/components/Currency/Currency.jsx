import React from 'react';
import styles from './styled';

const Currency = () => {
  const { CurrencyTable, Head, Body, Cell, HeaderLine } = styles;
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
    <CurrencyTable>
      <Head>
        <tr>
          <HeaderLine>Currency</HeaderLine>
          <HeaderLine>Purchase</HeaderLine>
          <HeaderLine>Sale</HeaderLine>
        </tr>
      </Head>
      <Body>
        {currencies.map(({ ccy, buy, sale }) => (
          <tr key={ccy}>
            <Cell>{ccy}</Cell>
            <Cell>{buy}</Cell>
            <Cell>{sale}</Cell>
          </tr>
        ))}
      </Body>
    </CurrencyTable>
  );
};
export default Currency;
