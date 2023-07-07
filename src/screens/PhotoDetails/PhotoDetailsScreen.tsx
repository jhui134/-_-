import {useNavigation} from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {useMount} from 'react-use';
import SKelectLinkLottie from '../../assets/animation/SKelectLinkLottie.json';
import {View} from 'react-native';
import {photoDetailsScreenStyles} from './PhotoDetailsScreen.styles';

interface PhotoDetailsScreenProps {
  route: any;
}

export const PhotoDetailsScreen = ({route}: PhotoDetailsScreenProps) => {
  const navigation = useNavigation();

  useMount(() => {
    navigation.setOptions({
      title: `${route.params.id}`,
    });
  });
  return (
    <View style={photoDetailsScreenStyles.wrap}>
      <AnimatedLottieView
        source={SKelectLinkLottie}
        style={photoDetailsScreenStyles.lottie}
        autoPlay
        loop
        speed={3}
      />
    </View>
  );
};
