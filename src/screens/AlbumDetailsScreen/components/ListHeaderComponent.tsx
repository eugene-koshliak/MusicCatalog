import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  imageUrl: string;
  artistName: string;
  albumName: string;
}

const ListHeaderComponent: FC<Props> = ({imageUrl, artistName, albumName}) => {
  return (
    <View style={styles.container}>
      {imageUrl && <Image source={{uri: imageUrl}} style={styles.image} />}
      <View style={styles.labelContainer}>
        <Text style={styles.artistName} numberOfLines={2}>
          {artistName}
        </Text>
        <Text style={styles.albumName} numberOfLines={2}>
          {albumName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 16,
    marginBottom: 16,
  },
  labelContainer: {
    flex: 1,
    marginLeft: 16,
  },
  artistName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  albumName: {
    fontSize: 18,
    color: 'gray',
  },
});

export default ListHeaderComponent;
