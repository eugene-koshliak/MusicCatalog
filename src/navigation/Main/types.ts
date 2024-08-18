export enum MainStackScreen {
  LOGIN_SCREEN = 'LoginScreen',
  HOME_SCREEN = 'HomeScreen',
  ALBUM_DETAILS_SCREEN = 'AlbumDetailsScreen',
  ARTIST_DETAILS_SCREEN = 'ArtistDetailsScreen',
}

export type MainStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  AlbumDetailsScreen: {
    artistName: string;
    albumName: string;
  };
  ArtistDetailsScreen: {
    artistName: string;
  };
};
