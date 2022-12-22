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
//Result:
// [
//   {
//     id: 'string',
//     transactionDate: 'string',
//     type: 'INCOME',
//     categoryId: 'string',
//     userId: 'string',
//     comment: 'string',
//     amount: 0,
//     balanceAfter: 0,
//   }
// ];

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
  const { data } = await axios.get('transactions-summary', {params});
  
  return data;
};

// Params:
// {
//   month: Number,
//   year: Number
// }

const getCategories = async () => {
  const { data } = await axios.get('transaction-categories');
  console.log(data);
  return data;
};

// {id: 'c9d9e447-1b83-4238-8712-edc77b18b739', name: 'Main expenses', type: 'EXPENSE'}
// 1
// {id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce', name: 'Products', type: 'EXPENSE'}
// 2
// {id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386', name: 'Car', type: 'EXPENSE'}
// 3
// {id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4', name: 'Self care', type: 'EXPENSE'}
// 4
// {id: '76cc875a-3b43-4eae-8fdb-f76633821a34', name: 'Child care', type: 'EXPENSE'}
// 5
// {id: '128673b5-2f9a-46ae-a428-ec48cf1effa1', name: 'Child care', type: 'EXPENSE'}
// 6
// {id: '1272fcc4-d59f-462d-ad33-a85a075e5581', name: 'Education', type: 'EXPENSE'}
// 7
// {id: 'c143130f-7d1e-4011-90a4-54766d4e308e', name: 'Leisure', type: 'EXPENSE'}
// 8
// {id: '719626f1-9d23-4e99-84f5-289024e437a8', name: 'Other expenses', type: 'EXPENSE'}
// 9
// {id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402', name: 'Entertainment', type: 'EXPENSE'}
// 10
// {id: '063f1132-ba5d-42b4-951d-44011ca46262', name: 'Income', type: 'INCOME'}

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
