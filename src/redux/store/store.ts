import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import photoList from '../reducers/photoList.reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  photoList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
