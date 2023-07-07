import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import verticalPhotoList from '../reducers/verticalPhotoList.reducer';
import horizontalPhotoList from '../reducers/horizontalPhotoList.reducer';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  verticalPhotoList,
  horizontalPhotoList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, thunk, promise);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
