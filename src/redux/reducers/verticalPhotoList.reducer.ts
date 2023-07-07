import _ from 'lodash';
import {GET_VERTICAL_PHOTO_LIST} from '../actions/types';
import {AnyAction} from 'redux';

interface VerticalPhotoListState {
  list: any[];
  _start: number;
  _limit: number;
  isLoading: boolean;
}

const initialState: VerticalPhotoListState = {
  list: [],
  _start: 0,
  _limit: 20,
  isLoading: false,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case `${GET_VERTICAL_PHOTO_LIST}`: {
      const newState = _.clone(state);
      newState.isLoading = true;
      return newState;
    }
    case `${GET_VERTICAL_PHOTO_LIST}_FULFILLED`: {
      const {data} = action.payload;
      const newState = _.clone(state);

      newState.list = [...newState.list, ...data];
      newState._limit = newState._limit;

      newState.isLoading = false;

      return newState;
    }
    case `${GET_VERTICAL_PHOTO_LIST}_REJECT`: {
      const newState = _.clone(state);
      newState.isLoading = false;
      return newState;
    }
    default:
      return state;
  }
};
