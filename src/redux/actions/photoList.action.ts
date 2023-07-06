import {GetPhotosParams} from '../../schema/getPhotosParams';
import {getPhotos} from '../../services/api';
import {GET_PHOTO_LIST} from './types';

export function getPhotosActon({_limit, _start}: GetPhotosParams) {
  return {
    type: GET_PHOTO_LIST,
    payload: getPhotos({_limit, _start}),
  };
}
