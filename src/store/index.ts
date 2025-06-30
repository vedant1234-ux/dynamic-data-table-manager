import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import columnsSlice from './slices/columnsSlice';
import dataSlice from './slices/dataSlice';
import themeSlice from './slices/themeSlice';

const rootReducer = combineReducers({
    data: dataSlice,
    columns: columnsSlice,
    theme: themeSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['columns']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 