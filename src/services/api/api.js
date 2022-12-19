import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/api/';

//Auth

const signUp = async body => {
  const { data } = await axios.post('auth/sign-up', body);
  return data;
};

//Body:
// {
//   "username": "and@gmail.com",
//   "email": "and@gmail.com",
//   "password": "12344321"
// }

const signIn = async body => {
  const { data } = await axios.post('auth/sign-in', body);
  return data;
};

//Body:
// {
//   "email": "string",
//   "password": "string"
// }

const signOut = async () => {
  await axios.post('users/sign-out');
};

const fetchCurrentUser = async () => {
  const { data } = await axios.get('users/current');
  return data;
};

//Transactions

const getTransaction = async () => {
  const { data } = await axios.get(`transactions/`);
  return data;
};

const createTransaction = async body => {
  const { data } = await axios.post('transactions', body);
  return data;
};

//Body:
// {
//   "transactionDate": "string",
//   "type": "INCOME",
//   "categoryId": "string",
//   "comment": "string",
//   "amount": 0
// }

//Statistics
const getTransactionSummary = async params => {
  const { data } = await axios.get('transactions-summary', params);
  return data;
};

// Params:
// {
//   month: Number,
//   year: Number
// }

const getCategories = async () => {
  const { data } = await axios.get('transactions-categories');
  return data;
};

const API = {
  signUp,
  signIn,
  signOut,
  fetchCurrentUser,
  getTransaction,
  createTransaction,
  getCategories,
  getTransactionSummary,
};

export default API;

// {
//   "user": {
//     "username": "and@gmail.com",
//     "email": "and@gmail.com",
//     "id": "9c6ac77d-90f8-42ab-9b61-21de32e59689",
//     "balance": 0
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI4MDRjMGJlNC1jMjJmLTQ5NWMtODU4MS1kNzg1ZWFmMGQ5ODgiLCJpYXQiOjE2NzE0NTM3MzYsImV4cCI6MTAwMDAwMDE2NzE0NTM3MzZ9.2vczhzmx18jwN_TAHs6jQlOiBtF-HxSiMO4Nl9PrlL0"
// }
