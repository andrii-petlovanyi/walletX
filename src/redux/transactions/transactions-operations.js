import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/api';
import { toast } from 'react-toastify';

const createTransaction = createAsyncThunk(
  'transaction/add',
  async (transaction, thunkAPI) => {
    try {
      const data = await API.createTransaction(transaction);
      return data;
    } catch (error) {
      console.log(error);

      const {
        status,
        data: { message },
      } = error.response;
      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);

const getTransactions = createAsyncThunk(
  'transaction/get',
  async (_, thunkAPI) => {
    try {
      const data = await API.getTransaction();
      return data;
    } catch (error) {
      toast.error('Cant connect to server');

      return thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

const operations = {
  createTransaction,
  getTransactions,
};

export default operations;
