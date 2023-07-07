import React from 'react';
import {photoHorizontalScreenStyles} from './PhotoHorizontalScreen.styles';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getHorizontalPhotosActon} from '../../redux/actions/horizontalPhotoList.action';
import {ReduxRootState} from '../../redux/store/types/ReduxRootState';
import {Photo} from '../../schema/photo';
import {StackNavigationProp} from '@react-navigation/stack';
import {useMount} from 'react-use';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/button/Button';
import {RouteNameTypes, RouteParamsProps} from '../types';
import {HorizontalPhotoCard} from '../../components/card/HorizontalPhotoCard';

export const PhotoHorizontalScreen = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<StackNavigationProp<RouteParamsProps, RouteNameTypes>>();
  const horizontalPhotoList = useSelector(
    (state: ReduxRootState) => state.horizontalPhotoList,
  );

  const onHandlePressCard = (id: number) => {
    navigation.navigate('photoDetails', {
      id,
    });
  };

  const fetchPhotoList = () => {
    if (horizontalPhotoList.isLoading) {
      return;
    }

    dispatch(
      getHorizontalPhotosActon({
        _start: horizontalPhotoList.list.length,
        _limit: horizontalPhotoList._limit,
      }),
    );
  };

  useMount(() => {
    fetchPhotoList();
  });

  const renderItem = ({item}: {item: Photo}) => {
    return (
      <Button onPress={() => onHandlePressCard(item.id)}>
        <HorizontalPhotoCard photo={item} />
      </Button>
    );
  };

  return (
    <View style={photoHorizontalScreenStyles.wrap}>
      <FlatList
        horizontal
        renderItem={renderItem}
        data={horizontalPhotoList.list}
        keyExtractor={(item: Photo, index: number) => `${item.id}_${index}`}
        onEndReached={fetchPhotoList}
        decelerationRate="fast"
        snapToAlignment="start"
        pagingEnabled
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
