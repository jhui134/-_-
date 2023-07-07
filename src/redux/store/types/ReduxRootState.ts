/**
 * redux root state 타입정의
 */
export interface ReduxRootState {
  verticalPhotoList: {
    list: any[];
    _start: number;
    _limit: number;
    isLoading: boolean;
  };
  horizontalPhotoList: {
    list: any[];
    _start: number;
    _limit: number;
    isLoading: boolean;
  };
}
