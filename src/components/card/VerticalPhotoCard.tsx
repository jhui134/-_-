import React from 'react';
import {View, ViewProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Label} from '../label/Label';
import {StaticText} from '../text/StaticText';
import {cardStyles} from './Card.styles';
import {Photo} from '../../schema/photo';

interface VerticalPhotoCardProps extends ViewProps {
  photo: Photo;
}

export const VerticalPhotoCard = (props: VerticalPhotoCardProps) => {
  const {photo} = props;
  return (
    <View style={cardStyles.verticalWrap}>
      <FastImage
        style={cardStyles.verticalImage}
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
