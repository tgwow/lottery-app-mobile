import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from './Auth';
import AppScreen from './App';

import { AuthContext } from '../contexts/auth';

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const { token } = useContext(AuthContext);
  return (
    <RootStack.Navigator initialRouteName="Auth" headerMode={false}>
      {token ? (
        <RootStack.Screen name="App" component={AppScreen} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthScreen} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
