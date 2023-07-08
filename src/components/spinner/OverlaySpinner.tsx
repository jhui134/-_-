import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {overlaySpinnerStyles} from './OverlaySpinner.styles';

export const OverlaySpinner = () => {
  return (
    <View style={overlaySpinnerStyles.wrap}>
      <ActivityIndicator size={'large'} color="#000" />
    </View>
  );
};
