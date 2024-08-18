import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList, AuthStackScreen} from './types';
import React, {FC} from 'react';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName={AuthStackScreen.LOGIN_SCREEN}>
      <Stack.Screen
        name={AuthStackScreen.LOGIN_SCREEN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
