import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import MainNavigator from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
