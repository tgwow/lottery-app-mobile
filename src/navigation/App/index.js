import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentGames from '../../containers/App/RecentGames';
import NewBet from '../../containers/App/NewBet';
import Drawer from '../../components/Drawer';
import TabBar from '../../components/Layout/TabBar';

const TabStack = createBottomTabNavigator();

export default ({ navigation }) => (
  <TabStack.Navigator
    headerMode={false}
    tabBar={(props) => <TabBar {...props} />}
  >
    <TabStack.Screen
      name="Home"
      component={Drawer}
      initialParams={{
        Screen: RecentGames,
        navigation,
      }}
    />
    <TabStack.Screen
      name="NewBet"
      options={{ tabBarLabel: 'Bet' }}
      initialParams={{ Screen: NewBet, navigation }}
      component={Drawer}
    />
    <TabStack.Screen name="Profile">{() => <Drawer />}</TabStack.Screen>
  </TabStack.Navigator>
);
