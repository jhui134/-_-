import api from '../helpers/api';
import {objectToQueryString} from '../helpers/utils';
import {GetPhotosParams} from '../schema/getPhotosParams';
import {GetPhotosResponse} from '../schema/getPhotosResponse';

/**
 * 사진 리스트를 가져오는 api
 */
export const getPhotos = ({
  _start,
  _limit,
}: GetPhotosParams): Promise<GetPhotosResponse> => {
  const query = objectToQueryString({_start, _limit});
  return api.get(`/photos?${query}`);
};
