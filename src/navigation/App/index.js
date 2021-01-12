import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecentGames from '../../containers/App/RecentGames';
import NewBet from '../../containers/App/NewBet';

const AppStack = createStackNavigator();

export default () => (
  <AppStack.Navigator headerMode={false}>
    <AppStack.Screen name="NewBet" component={NewBet} />
    <AppStack.Screen name="RecentGames" component={RecentGames} />
  </AppStack.Navigator>
);
