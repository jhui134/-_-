import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import verticalPhotoList from '../reducers/verticalPhotoList.reducer';
import horizontalPhotoList from '../reducers/horizontalPhotoList.reducer';

const rootReducer = combineReducers({
  verticalPhotoList,
  horizontalPhotoList,
});

const middleware = applyMiddleware(thunk, promise);

export const store = createStore(rootReducer, middleware);
