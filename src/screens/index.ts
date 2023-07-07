import {BaseScreen} from './BaseScreen';
import {PhotoDetailsScreen} from './PhotoDetails/PhotoDetailsScreen';

export const screens: any[] = [
  {
    name: 'baseScreen',
    component: BaseScreen,
    options: {
      headerShown: false,
      title: null,
    },
  },
  {
    name: 'photoDetails',
    component: PhotoDetailsScreen,
    options: {
      title: '사진',
    },
  },
];
