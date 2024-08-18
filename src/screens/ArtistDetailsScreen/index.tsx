import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import TopNavbar from '../../components/TopNavbar';
import useGetArtistInfo from '../../data/hooks/useGetArtistInfo';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList, MainStackScreen} from '../../navigation/types';
import HtmlText from '../../components/HtmlText';

const ArtistDetailsScreen: FC = () => {
  const {
    params: {artistName},
  } =
    useRoute<
      RouteProp<MainStackParamList, MainStackScreen.ARTIST_DETAILS_SCREEN>
    >();
  const {data} = useGetArtistInfo(artistName);

  return (
    <View style={styles.container}>
      <TopNavbar title={'Artist details'} />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          {data?.imageUrl ? (
            <Image source={{uri: data?.imageUrl}} style={styles.image} />
          ) : (
            <View style={styles.emptyImageContainer}>
              <Text>{'No image'}</Text>
            </View>
          )}
          <View style={styles.labelsContainer}>
            <Text style={styles.label}>{`Name: ${data?.name}`}</Text>
            <Text style={styles.label}>{`Listeners: ${data?.listeners}`}</Text>
            <Text style={styles.label}>{`Play count: ${data?.playCount}`}</Text>
          </View>
        </View>

        <HtmlText html={data?.bio.content} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 16,
  },
  emptyImageContainer: {
    height: 150,
    width: 150,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelsContainer: {
    marginLeft: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ArtistDetailsScreen;
