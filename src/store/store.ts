import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import { reducer } from '../reducers/combine'
import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

