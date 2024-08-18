import React, {FC} from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ITopAlbum} from '../../../data/models/UserTopAlbumsModel';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {MainStackParamList, MainStackScreen} from '../../../navigation/types';

interface Props {
  item: ITopAlbum;
}

const AlbumItem: FC<Props> = ({item}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const onAlbumPress = () => {
    console.log('-------item', item);
    navigate(MainStackScreen.ALBUM_DETAILS_SCREEN, {
      artistName: item.artist.name,
      albumName: item.name,
    });
  };

  return (
    <Pressable style={styles.container} onPress={onAlbumPress}>
      {item.imageUrl ? (
        <Image
          source={{uri: item.imageUrl}}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.emptyImageContainer}>
          <Text>{'No image'}</Text>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.albumName}>{item.name}</Text>
        <Text style={styles.artistName}>{item.artist.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  emptyImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
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
