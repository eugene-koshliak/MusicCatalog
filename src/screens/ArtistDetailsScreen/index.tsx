import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import TopNavbar from '../../components/TopNavbar';

const ArtistDetailsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <TopNavbar title={'Artist details'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
});

export default ArtistDetailsScreen;
