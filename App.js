import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
// import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/views/home';
const Tab = createBottomTabNavigator();
import Router from './src/router';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
