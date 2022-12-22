import { createSlice } from '@reduxjs/toolkit';
import options from './transactions-operations';

const initialState = {
  transactions: [],
  loadingTrans: false,
  loadingAddTrans: false,
  // isModalOpen: false,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [options.createTransaction.pending]: state => {
      state.loadingAddTrans = true;
    },
    [options.createTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = [payload, ...state.transactions];
      state.loadingAddTrans = false;
    },
    [options.createTransaction.rejected]: state => {
      state.loadingAddTrans = false;
    },
    [options.getTransactions.pending]: state => {
      state.loadingTrans = true;
    },
    [options.getTransactions.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
      state.loadingTrans = false;
    },
    [options.getTransactions.rejected]: state => {
      state.loadingTrans = false;
    },
  },
});
export const { openModal, closeModal } = transactionSlice.actions;
export default transactionSlice.reducer;
