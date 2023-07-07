import React, {ReactNode} from 'react';
import {View, Pressable, ActivityIndicator, ViewStyle} from 'react-native';
import {buttonStyles} from './Button.styles';

interface ButtonProps {
  primary?: boolean;
  style?: ViewStyle;
  btnStyle?: ViewStyle;
  loading?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
}

export const Button = ({
  style,
  btnStyle,
  loading,
  children,
  disabled,
  onPress,
}: ButtonProps) => {
  const onPressBtn = () => {
    if (disabled || loading || !onPress) {
      return;
    }
    onPress();
  };

  return (
    <Pressable onPress={onPressBtn} style={[buttonStyles.wrap, {...btnStyle}]}>
      <View style={style}>
        {loading ? (
          <View>
            <ActivityIndicator />
          </View>
        ) : (
          children
        )}
      </View>
    </Pressable>
  );
};
