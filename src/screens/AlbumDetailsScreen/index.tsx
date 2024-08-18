import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import useGetAlbumDetails from '../../data/hooks/useGetAlbumDetails';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList, MainStackScreen} from '../../navigation/types';
import TopNavbar from '../../components/TopNavbar';
import {FlatList} from 'react-native-gesture-handler';
import {formatTimeToMinutes} from '../../utils/TimeUtil';
import TrackItem from './components/TrackItem';
import ListHeaderComponent from './components/ListHeaderComponent';

const AlbumDetailsScreen: FC = () => {
  const {
    params: {artistName, albumName},
  } =
    useRoute<
      RouteProp<MainStackParamList, MainStackScreen.ALBUM_DETAILS_SCREEN>
    >();

  const {data} = useGetAlbumDetails(artistName, albumName);

  return (
    <View style={styles.container}>
      <TopNavbar title={'Details'} />

      <FlatList
        contentContainerStyle={styles.listContentContainer}
        data={data?.tracks}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <ListHeaderComponent
            imageUrl={data?.imageUrl ?? ''}
            artistName={data?.artist ?? ''}
            albumName={data?.name ?? ''}
          />
        }
        renderItem={({item}) => (
          <TrackItem name={item.name} duration={item.duration} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  listContentContainer: {
    paddingVertical: 16,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
});

export default AlbumDetailsScreen;
