import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import MainNavigator from './src/navigation/Main';
import {NavigationContainer} from '@react-navigation/native';

import {AppContextProviders} from './src/context/AppContextProvider';
import {ToastProvider} from 'react-native-toast-notifications';

if (__DEV__) {
  require('./ReactotronConfig');
}

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <ToastProvider>
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
    </ToastProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
