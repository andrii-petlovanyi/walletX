import React, { useEffect, useState } from 'react';
import fetchCurrency from 'services/api/currency';
import Loader from 'components/Loader/Loader';
import styles from './styled';
import { useNavigate } from 'react-router-dom';
import { useMedia } from 'react-use';
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

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isNarrow = useMedia('(min-width: 768px)');
  const currencyName = [
    { name: 'EUR', code: 978 },
    { name: 'USD', code: 840 },
    { name: 'CHF', code: 756 },
    { name: 'PLN', code: 985 },
  ];

  const searchCurrencyName = currencyCode => {
    const filtered = currencyName.filter(item => item.code === currencyCode);
    return filtered[0].name;
  };

  useEffect(() => {
    const sortCurrencyArr = [978, 840, 756, 985];
    const delta = Date.now() - Number(currency.time) < 3600000;
    if (currency.currency?.length && delta) return;
    setLoading(true);
    const getCurrency = async () => {
      try {
        const { data } = await fetchCurrency();
        setLoading(false);
        const filteredCurrency = data.filter(
          item =>
            sortCurrencyArr.includes(Number(item.currencyCodeA)) &&
            item.currencyCodeB !== 840
        );

        localStorage.setItem(
          'currency',
          JSON.stringify({ currency: filteredCurrency, time: Date.now() })
        );
        setCurrency(JSON.parse(localStorage.getItem('currency')));
      } catch (error) {}
    };
    getCurrency();
  }, [currency]);
  useEffect(() => {
    if (isNarrow) {
      navigate('/');
    }
  }, [isNarrow, navigate]);
  return (
    <>
      {isLoading && <Loader />}
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
            {currency.currency?.map(
              ({ currencyCodeA, rateBuy, rateSell, rateCross }) => (
                <tr key={currencyCodeA}>
                  <Cell>{searchCurrencyName(currencyCodeA)}</Cell>
                  <Cell>{rateBuy ? rateBuy.toFixed(2) : '-'}</Cell>
                  <Cell>
                    {rateSell ? rateSell.toFixed(2) : rateCross.toFixed(2)}
                  </Cell>
                </tr>
              )
            )}
          </Body>
        </CurrencyTable>
      </CurrencyWrap>
    </>
  );
};
export default Currency;
