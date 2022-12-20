import axios from 'axios';

axios.defaults.baseURL = '';

//Auth

const getCurrency = async () => {
  const { data } = await axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
  );
  return data;
};

export default getCurrency;
