import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styled';

const Currency = () => {
  const {
    CurrencyWrap,
    CurrencyTable,
    Head,
    Body,
    Cell,
    HeaderLine,
    BodyWrap,
  } = styles;
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

  return (
    <CurrencyWrap>
      <CurrencyTable>
        <Head>
          <BodyWrap>
            <HeaderLine>Currency</HeaderLine>
            <HeaderLine>Purchase</HeaderLine>
            <HeaderLine>Sale</HeaderLine>
          </BodyWrap>
        </Head>

        <Body>
          {currency?.map(({ currencyCodeA, rateBuy, rateSell }) => (
            <tr key={currencyCodeA}>
              <Cell>{currencyCodeA === 840 ? 'USD' : 'EUR'}</Cell>
              <Cell>{rateBuy.toFixed(2)}</Cell>
              <Cell>{rateSell.toFixed(2)}</Cell>
            </tr>
          ))}
        </Body>
      </CurrencyTable>
    </CurrencyWrap>
  );
};
export default Currency;
