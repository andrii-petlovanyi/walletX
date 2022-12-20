import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/api';

const getTransactionSummary = createAsyncThunk(
  'transactionSummary/get',
  async (params, thunkAPI) => {
    try {
      const data = await API.getTransactionSummary(params);
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

export default getTransactionSummary;
