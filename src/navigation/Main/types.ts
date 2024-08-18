export enum MainStackScreen {
  HOME_SCREEN = 'HomeScreen',
  ALBUM_DETAILS_SCREEN = 'AlbumDetailsScreen',
  ARTIST_DETAILS_SCREEN = 'ArtistDetailsScreen',
}

export type MainStackParamList = {
  HomeScreen: undefined;
  AlbumDetailsScreen: {
    artistName: string;
    albumName: string;
  };
  ArtistDetailsScreen: {
    artistName: string;
  };
};
