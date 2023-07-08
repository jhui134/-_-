import {GetPhotosParams} from '../../schema/getPhotosParams';
import {getPhotos} from '../../services/api';
import {GET_VERTICAL_PHOTO_LIST} from './types';

export function getVerticalPhotosActon({_limit, _start}: GetPhotosParams) {
  return {
    type: GET_VERTICAL_PHOTO_LIST,
    payload: async () => {
      const resp = await getPhotos({_limit, _start});
      return {
        data: resp,
        _start,
      };
    },
  };
}
