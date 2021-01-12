import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from './Auth';
import AppScreen from './App';

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName="App" headerMode={false}>
    <RootStack.Screen name="Auth" component={AuthScreen} />
    <RootStack.Screen name="App" component={AppScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
