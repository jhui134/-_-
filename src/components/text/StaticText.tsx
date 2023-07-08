import React from 'react';
import {Text} from 'react-native';
import {StaticTextStyles} from './StaticText.styles';

interface StaticProps {
  children: string | number;
}

export const StaticText = ({children}: StaticProps) => {
  return <Text style={StaticTextStyles.text}>{children}</Text>;
};
