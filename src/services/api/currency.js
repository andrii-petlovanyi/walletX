import axios from 'axios';

const fetchCurrency = async () => {
  const res = await axios.get('https://api.monobank.ua/bank/currency');
  console.log(res);
  if (!res.ok) {
    throw new Error(res.status);
  }
  return res.data;
};

export default fetchCurrency;
