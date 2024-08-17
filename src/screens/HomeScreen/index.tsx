import {FC} from 'react';
import useGetUserTopAlbums from '../../data/hooks/useGetUserTopAlbums';
import {StyleSheet, View} from 'react-native';

const HomeScreen: FC = () => {
  const {data} = useGetUserTopAlbums(10);

  console.log('--------DATA', data);

  return (
    <View style={styles.container}>
      {/* {data.topalbums.album?.map(album => (
        <Text>{album.title}</Text>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
