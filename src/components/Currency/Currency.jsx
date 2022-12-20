import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styled';

const Currency = () => {
  const [currency, setCurrency] = useState(
    JSON.parse(localStorage.getItem('currency')) || []
  );

  useEffect(() => {
    if (currency.length) return;
    const getCurrency = async () => {
      try {
        const { data } = await axios.get(
          'https://api.monobank.ua/bank/currency'
        );
        localStorage.setItem('currency', JSON.stringify(data.slice(0, 2)));
        setCurrency(data.slice(0, 2));
      } catch (error) {}
    };
    getCurrency();
  }, [currency.length]);

  // const currencies = [
  //   {
  //     ccy: 'EUR',
  //     base_ccy: 'UAH',
  //     buy: '19.20000',
  //     sale: '20.00000',
  //   },
  //   {
  //     ccy: 'USD',
  //     base_ccy: 'UAH',
  //     buy: '15.50000',
  //     sale: '15.85000',
  //   },
  // ];

  // currencyCodeA: 840, currencyCodeB: 980, date: 1671487274, rateBuy: 36.65, rateSell: 37.4406

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
        {currency?.map(({ currencyCodeA, rateBuy, rateSell }) => (
          <tr key={currencyCodeA}>
            <styles.Cell>{currencyCodeA === 840 ? 'USD' : 'EUR'}</styles.Cell>
            <styles.Cell>{rateBuy.toFixed(2)}</styles.Cell>
            <styles.Cell>{rateSell.toFixed(2)}</styles.Cell>
          </tr>
        ))}
      </styles.Body>
    </styles.CurrencyTable>
  );
};
export default Currency;
