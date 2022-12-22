import axios from 'axios';

const fetchCurrency = async () => {
  try {
    const res = await axios.get('https://api.monobank.ua/bank/currency');
    return res;
  } catch (error) {}
};

export default fetchCurrency;
