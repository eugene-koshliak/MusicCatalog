import React, {FC} from 'react';
import useGetUserTopAlbums from '../../data/hooks/useGetUserTopAlbums';
import {StyleSheet, View, FlatList} from 'react-native';
import AlbumItem from './components/AlbumItem';

const HomeScreen: FC = () => {
  const {data: albums} = useGetUserTopAlbums(10);

  console.log('--------DATA', albums);

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        keyExtractor={item => item.id}
        renderItem={({item}) => <AlbumItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
  },
});

export default HomeScreen;
