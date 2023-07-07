import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/colors';
import settings from '../../settings';

export const cardStyles = StyleSheet.create({
  horizontalWrap: {
    width: settings.windowDimensions.width,
  },
  verticalWrap: {
    backgroundColor: Colors.white,
    margin: 16,
    flex: 1,
    borderRadius: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  horizontalImage: {
    height: 500,
  },
  verticalImage: {
    height: 500,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  textWrap: {
    padding: 16,
  },
  textInner: {
    marginBottom: 8,
  },
});
