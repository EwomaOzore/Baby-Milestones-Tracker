// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './navigation/MainTabNavigator';
import MainStackNavigator from './navigation/StackNavigator';

const App = () => {
  const showOnboarding = true;

  return (
    <NavigationContainer>
      {showOnboarding ? (
        <MainStackNavigator />
      ) : (
        <MainTabNavigator />
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;