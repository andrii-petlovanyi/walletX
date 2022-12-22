import { createSlice } from '@reduxjs/toolkit';
import options from './transactions-operations';

const initialState = {
  transactions: [],
  loadingTrans: false,
  loadingAddTrans: false,
  error: null,
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
      state.error = null;
    },
    [options.createTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = [payload, ...state.transactions];
      state.loadingAddTrans = false;
      state.error = null;
    },
    [options.createTransaction.rejected]: (state, { payload }) => {
      state.loadingAddTrans = false;
      state.error = payload.message;
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
export const { cleanError } = transactionSlice.actions;
// export const { openModal, closeModal } = transactionSlice.actions;
export default transactionSlice.reducer;
