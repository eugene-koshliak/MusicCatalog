import React, {useContext} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import MainNavigator from './src/navigation/Main';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './src/context/AuthContext';
import AuthNavigator from './src/navigation/Auth';
import {AppContextProviders} from './src/context/AppContextProvider';

if (__DEV__) {
  require('./ReactotronConfig');
}

const App: React.FC = () => {
  const {isAuthorized} = useContext(AuthContext);
  const queryClient = new QueryClient();

  return (
    <AppContextProviders>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </QueryClientProvider>
    </AppContextProviders>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
