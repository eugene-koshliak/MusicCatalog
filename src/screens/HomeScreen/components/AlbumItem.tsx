import React, {FC} from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IUserTopAlbum} from '../../../data/models/UserTopAlbumsModel';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {MainStackParamList, MainStackScreen} from '../../../navigation/types';

interface Props {
  item: IUserTopAlbum;
}

const AlbumItem: FC<Props> = ({item}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const onAlbumPress = () => {
    navigate(MainStackScreen.ALBUM_DETAILS_SCREEN, {
      artistName: item.artist.name,
      albumName: item.name,
    });
  };

  return (
    <Pressable style={styles.container} onPress={onAlbumPress}>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.image}
        resizeMode="contain"
      />
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
    height: 100,
    marginTop: 16,
    marginLeft: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
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
