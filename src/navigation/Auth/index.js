import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../containers/Auth/SignIn';
import SignUp from '../../containers/Auth/SignUp';
import RecoveryPassword from '../../containers/Auth/RecoveryPassword';
import SignOut from '../../containers/Auth/SignOut';

const AuthStack = createStackNavigator();

export default () => (
  <AuthStack.Navigator headerMode={false}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="RecoveryPassword" component={RecoveryPassword} />
    <AuthStack.Screen name="SignOut" component={SignOut} />
  </AuthStack.Navigator>
);
