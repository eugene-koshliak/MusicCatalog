import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import useGetAlbumDetails from '../../data/hooks/useGetAlbumDetails';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList, MainStackScreen} from '../../navigation/types';

const AlbumDetailsScreen: FC = () => {
  const {
    params: {artistName, albumName},
  } =
    useRoute<
      RouteProp<MainStackParamList, MainStackScreen.ALBUM_DETAILS_SCREEN>
    >();

  const {data} = useGetAlbumDetails(artistName, albumName);

  console.log('----------albumDetails', data);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default AlbumDetailsScreen;
