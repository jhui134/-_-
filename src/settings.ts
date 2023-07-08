import {Dimensions} from 'react-native';
import {Colors} from './shared/colors';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const defaultScreenOptions = {
  headerTopInsetEnabled: false,
  headerBackTitleVisible: false,
  headerTransparent: false,
  headerShadowVisible: false,
  headerStyle: {backgroundColor: Colors.white},
};
const windowDimensions = Dimensions.get('window');

export default {
  apiUrl,
  defaultScreenOptions,
  windowDimensions,
};
