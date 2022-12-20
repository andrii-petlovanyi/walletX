import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/api';
import { toast } from 'react-toastify';

const getCategory = createAsyncThunk('category/get', async (_, thunkAPI) => {
  try {
    const data = await API.getCategories();
    console.log(data);
    return data;
  } catch (error) {
    toast.error('Cant connect to server');
    return thunkAPI.rejectWithValue(error.response.message);
  }
});

export default getCategory;
