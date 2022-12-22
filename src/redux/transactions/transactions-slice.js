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
  // reducers: {
  //   openModal(state, _) {
  //     state.isModalOpen = true;
  //   },
  //   closeModal(state, _) {
  //     state.isModalOpen = false;
  //   },
  // },
  extraReducers: {
    [options.createTransaction.pending]: state => {
      state.loadingAddTrans = true;
    },
    [options.createTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = payload.result?.reverse();
      state.loadingAddTrans = false;
    },
    [options.createTransaction.rejected]: state => {
      state.loadingAddTrans = false;
    },
    [options.getTransactions.pending]: state => {
      state.loadingTrans = true;
    },
    [options.getTransactions.fulfilled]: (state, { payload }) => {
      state.transactions = payload?.reverse();
      state.loadingTrans = false;
    },
    [options.getTransactions.rejected]: state => {
      state.loadingTrans = false;
    },
  },
});
export const { openModal, closeModal } = transactionSlice.actions;
export default transactionSlice.reducer;
