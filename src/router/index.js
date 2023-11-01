import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import scoreShow from '../views/scoreShow';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MianTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Tab.Screen name="User" component={UserScreen} />
  </Tab.Navigator>
);

export default function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mianTabs"
        component={MianTabs}
        options={{headerShown: false}}></Stack.Screen>
      {/*  下为不带tab的路由 */}
      <Stack.Screen
        name="scoreShow"
        component={scoreShow}
        options={{
          headerShown: true,
          title: '',
          headerBackTitleVisible: false,
          headerBackTitle: '',
          headerTintColor: '#000',
          headerStyle: {backgroundColor: 'tomato'},
        }}
      />
    </Stack.Navigator>
  );
}
