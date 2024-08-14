import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {MainStackScreen} from './types';
import HomeScreen from '../screens/HomeScreen';

const MainStack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName={MainStackScreen.HOME_SCREEN}>
      <MainStack.Screen
        name={MainStackScreen.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
