import React from 'react';
import {Text} from 'react-native';
import {labelStyles} from './Label.styles';

interface LabelProps {
  value: string;
}

export const Label = ({value}: LabelProps) => {
  return <Text style={labelStyles.text}>{value}</Text>;
};
