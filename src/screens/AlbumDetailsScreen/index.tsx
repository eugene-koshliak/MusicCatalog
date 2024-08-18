import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import useGetAlbumDetails from '../../data/hooks/useGetAlbumDetails';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList, MainStackScreen} from '../../navigation/types';
import TopNavbar from '../../components/TopNavbar';
import {FlatList} from 'react-native-gesture-handler';
import TrackItem from './components/TrackItem';
import ListHeaderComponent from './components/ListHeaderComponent';

const AlbumDetailsScreen: FC = () => {
  const {
    params: {artistName, albumName},
  } =
    useRoute<
      RouteProp<MainStackParamList, MainStackScreen.ALBUM_DETAILS_SCREEN>
    >();

  const {data, error, isLoading} = useGetAlbumDetails(artistName, albumName);

  return (
    <View style={styles.container}>
      <TopNavbar title={'Album details'} />

      {error && <Text>{'No album details'}</Text>}
      {isLoading ? (
        <ActivityIndicator
          style={styles.loader}
          size={'large'}
          color={'black'}
        />
      ) : (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    justifyContent: 'center',
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AlbumDetailsScreen;
