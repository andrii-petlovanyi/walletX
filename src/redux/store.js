import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedAuthReducer } from './persist/persist-reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import transactionsReducer from './transactions/transactions-slice';
import categoryReducer from './category/category-slice';
import statisticReducer from './statistic/statistics-slice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transaction: transactionsReducer,
    category: categoryReducer,
    statistic: statisticReducer,
    //
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
