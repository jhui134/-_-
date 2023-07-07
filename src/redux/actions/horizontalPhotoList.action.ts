import {GetPhotosParams} from '../../schema/getPhotosParams';
import {getPhotos} from '../../services/api';
import {GET_HORIZONTAL_PHOTO_LIST} from './types';

export function getHorizontalPhotosActon({_limit, _start}: GetPhotosParams) {
  return {
    type: GET_HORIZONTAL_PHOTO_LIST,
    payload: getPhotos({_limit, _start}),
  };
}
