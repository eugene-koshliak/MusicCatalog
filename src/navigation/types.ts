export enum MainStackScreen {
  HOME_SCREEN = 'HomeScreen',
  ALBUM_DETAILS_SCREEN = 'AlbumDetailsScreen',
}

export type MainStackParamList = {
  HomeScreen: undefined;
  AlbumDetailsScreen: {
    artistName: string;
    albumName: string;
  };
};
