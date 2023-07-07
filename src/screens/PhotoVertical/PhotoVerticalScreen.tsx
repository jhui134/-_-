import React from 'react';
import {photoVerticalScreenStyles} from './PhotoVerticalScreen.styles';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getVerticalPhotosActon} from '../../redux/actions/verticalPhotoList.action';
import {ReduxRootState} from '../../redux/store/types/ReduxRootState';
import {Photo} from '../../schema/photo';
import {useMount} from 'react-use';
import {VerticalPhotoCard} from '../../components/card/VerticalPhotoCard';
import {Button} from '../../components/button/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteNameTypes, RouteParamsProps} from '../types';
import {useNavigation} from '@react-navigation/native';

export const PhotoVerticalScreen = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<StackNavigationProp<RouteParamsProps, RouteNameTypes>>();
  const verticalPhotoList = useSelector(
    (state: ReduxRootState) => state.verticalPhotoList,
  );

  const onHandlePressCard = (id: number) => {
    navigation.navigate('photoDetails', {
      id,
    });
  };

  const fetchPhotoList = () => {
    if (verticalPhotoList.isLoading) {
      return;
    }

    dispatch(
      getVerticalPhotosActon({
        _start: verticalPhotoList.list.length,
        _limit: verticalPhotoList._limit,
      }),
    );
  };

  useMount(() => {
    fetchPhotoList();
  });

  const renderItem = ({item}: {item: Photo}) => {
    return (
      <Button onPress={() => onHandlePressCard(item.id)}>
        <VerticalPhotoCard photo={item} />
      </Button>
    );
  };

  return (
    <View style={photoVerticalScreenStyles.wrap}>
      <FlatList
        renderItem={renderItem}
        data={verticalPhotoList.list}
        keyExtractor={(item: Photo, index: number) => `${item.id}_${index}`}
        onEndReached={fetchPhotoList}
      />
    </View>
  );
};
