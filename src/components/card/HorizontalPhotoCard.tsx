import React from 'react';
import {View, ViewProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Label} from '../label/Label';
import {cardStyles} from './Card.styles';
import {StaticText} from '../text/StaticText';
import {Photo} from '../../schema/photo';

interface HorizontalPhotoCardProps extends ViewProps {
  photo: Photo;
}

export const HorizontalPhotoCard = (props: HorizontalPhotoCardProps) => {
  const {photo} = props;
  return (
    <View style={cardStyles.horizontalWrap}>
      <FastImage
        style={cardStyles.horizontalImage}
        source={{
          uri: photo.url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.center}
      />
      <View style={cardStyles.textWrap}>
        <View style={cardStyles.textInner}>
          <Label value="제목" />
          <StaticText>{photo.title}</StaticText>
        </View>
        <View style={cardStyles.textInner}>
          <Label value="앨범" />
          <StaticText>{photo.albumId}</StaticText>
        </View>
      </View>
    </View>
  );
};
