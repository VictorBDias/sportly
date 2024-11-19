import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Button, Text, View } from 'react-native';
import { Image } from 'tamagui';
import { useSharedValue } from 'react-native-reanimated';
import { Dimensions } from 'react-native';

const data = [
  {
    id: 1,
    uri: 'https://static.vecteezy.com/ti/vetor-gratis/t1/8976902-futebol-modelo-design-futebol-banner-esporte-layout-design-vetor.jpg',
  },
  {
    id: 2,
    uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/7746206-futebol-modelo-design-futebol-banner-esporte-layout-design-ilustracaoial-vetor.jpg',
  },
];

export const Carrousel = () => {
  const scrollOffsetValue = useSharedValue<number>(0);
  const deviceWidth = Dimensions.get('window').width;

  return (
    <Carousel
      loop={true}
      width={deviceWidth}
      snapEnabled={true}
      pagingEnabled={true}
      autoPlayInterval={2000}
      data={data}
      defaultScrollOffsetValue={scrollOffsetValue}
      style={{
        width: '100%',
        backgroundColor: 'red',
        height: deviceWidth / 2,
      }}
      // onScrollStart={() => {
      //   console.log('Scroll start');
      // }}
      // onScrollEnd={() => {
      //   console.log('Scroll end');
      // }}
      // onSnapToItem={(index: number) => console.log('current index:', index)}
      renderItem={item => (
        <Image
          source={{
            uri: item.item.uri,
            width: deviceWidth,
            height: deviceWidth / 2,
          }}
        />
      )}
    />
  );
};
