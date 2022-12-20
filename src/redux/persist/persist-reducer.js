import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from 'redux/auth/index';
import { authPersistConfig } from './persist-config';

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
