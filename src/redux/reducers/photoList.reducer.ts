import {GET_PHOTO_LIST} from '../actions/types';
import {AnyAction} from 'redux';

interface PhotoListState {
  list: any[];
  _start: number;
  _limit: number;
}

const initialState: PhotoListState = {
  list: [],
  _start: 0,
  _limit: 20,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case `${GET_PHOTO_LIST}`: {
      const {data} = action.payload;
      const newState = state;
      const newData = data.length ? [...data] : [];
      newState.list = [...state.list, ...newData];
      newState._limit = state._limit;
      newState._start = data.length;

      return newState;
    }
    default:
      return state;
  }
};
