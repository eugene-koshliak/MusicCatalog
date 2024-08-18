import React, {FC, useContext} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList, MainStackScreen} from '../../navigation/Main/types';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {useToast} from 'react-native-toast-notifications';

const LoginScreen: FC = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const toast = useToast();

  const {
    userLogin,
    setUserLogin,
    userPassword,
    setUserPassword,
    setIsAuthorized,
  } = useContext(AuthContext);

  const onLoginPress = () => {
    if (!userLogin || !userPassword) {
      toast.show('Please fill login and password');

      return;
    }

    setIsAuthorized(true);
    navigate(MainStackScreen.HOME_SCREEN);
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <TextInput
        style={styles.email}
        placeholder={'Login'}
        value={userLogin}
        autoCapitalize="none"
        onChangeText={setUserLogin}
      />
      <TextInput
        style={styles.password}
        placeholder={'Password'}
        value={userPassword}
        autoCapitalize="none"
        onChangeText={setUserPassword}
      />

      <Pressable style={styles.loginButton} onPress={onLoginPress}>
        <Text style={styles.loginButtonText}>{'Login'}</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: 'white',
  },
  email: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  password: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  loginButton: {
    alignSelf: 'center',
    minWidth: 200,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  loginButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
