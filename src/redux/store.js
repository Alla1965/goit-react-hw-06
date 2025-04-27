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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'],
};

// 1. Конфігурація для persisting
const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], // зберігаємо тільки поле items
};

// 2. Комбінуємо ред'юсери
const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer), // persist тільки tasks.items
  filters: filtersReducer, // фільтри не потрібно зберігати
});

// 3. Створюємо store
// export const store = configureStore({
//   reducer: rootReducer,
// });
// // 4. Створюємо persistor
// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
