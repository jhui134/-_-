import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {PhotoHorizontalScreen} from './PhotoHorizontal/PhotoHorizontalScreen';
import {PhotoVerticalScreen} from './PhotoVertical/PhotoVerticalScreen';

const BottomTabNav = createBottomTabNavigator();

/**
 * 바텀 메뉴가 포함된 메인 스크린
 */
export const BaseScreen = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTabNav.Navigator>
        <BottomTabNav.Screen
          name="photoHorizontal"
          options={{
            title: '가로 리스트',
          }}
          component={PhotoHorizontalScreen}
        />
        <BottomTabNav.Screen
          name="photoVertical"
          options={{
            title: '세로 리스트',
          }}
          component={PhotoVerticalScreen}
        />
      </BottomTabNav.Navigator>
    </View>
  );
};
