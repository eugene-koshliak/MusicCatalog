import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {MainStackScreen} from './types';
import HomeScreen from '../../screens/HomeScreen';
import AlbumDetailsScreen from '../../screens/AlbumDetailsScreen';
import ArtistDetailsScreen from '../../screens/ArtistDetailsScreen';
import AuthNavigator from '../Auth';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={MainStackScreen.LOGIN_SCREEN}>
      <Stack.Screen
        name={MainStackScreen.LOGIN_SCREEN}
        component={AuthNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={MainStackScreen.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MainStackScreen.ALBUM_DETAILS_SCREEN}
        component={AlbumDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MainStackScreen.ARTIST_DETAILS_SCREEN}
        component={ArtistDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
