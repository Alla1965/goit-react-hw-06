import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { combineReducers } from 'redux';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], 
};


const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer), // persist тільки tasks.items
  filters: filtersReducer,
});

// Створюємо store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
