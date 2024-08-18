import React, {FC, useState} from 'react';
import useGetUserTopAlbums from '../../data/hooks/useGetUserTopAlbums';
import {
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import AlbumItem from './components/AlbumItem';
import useGetArtistTopAlbums from '../../data/hooks/useGetArtistTopAlbums';

const HomeScreen: FC = () => {
  const [search, setSearch] = useState('');

  const {data: userAlbums, isLoading: isUserAlbumsLoading} =
    useGetUserTopAlbums(10);
  const {data: artistAlbums, isLoading: isArtistAlbumsLoading} =
    useGetArtistTopAlbums(search, 10);

  const listData = artistAlbums ?? userAlbums;
  const isLoading = isUserAlbumsLoading || isArtistAlbumsLoading;

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <TextInput
        style={styles.searchContainer}
        placeholder={'Search'}
        onChangeText={setSearch}
      />
      {isLoading ? (
        <ActivityIndicator
          style={styles.loader}
          size={'large'}
          color={'black'}
        />
      ) : (
        <FlatList
          data={listData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <AlbumItem item={item} />}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  searchContainer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 8,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
