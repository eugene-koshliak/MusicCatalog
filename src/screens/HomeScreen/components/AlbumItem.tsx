import React, {FC} from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {IUserTopAlbum} from '../../../data/models/UserTopAlbumsModel';

interface Props {
  item: IUserTopAlbum;
}

const AlbumItem: FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.albumName}>{item.name}</Text>
        <Text style={styles.artistName}>{item.artist.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    marginTop: 16,
    marginLeft: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 16,
  },
  albumName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  artistName: {
    fontSize: 16,
    color: 'gray',
  },
});

export default AlbumItem;
