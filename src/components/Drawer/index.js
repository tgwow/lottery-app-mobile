import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { COLORS } from '../../styles/colors';
import Cart from '../Cart';

const DefaultC = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Ops, nothing here!</Text>
  </View>
);

const Drawer = ({ Screen }) => {
  const drawerRef = useRef(null);
  const Component = Screen || DefaultC;

  const renderDrawer = () => {
    return <Cart close={() => drawerRef.current.closeDrawer()} />;
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerLayout
        ref={drawerRef}
        drawerWidth={300}
        drawerPosition={DrawerLayout.positions.Right}
        drawerType="front"
        drawerBackgroundColor={COLORS.white}
        renderNavigationView={renderDrawer}
      >
        <Component open={() => drawerRef.current.openDrawer()} />
      </DrawerLayout>
    </View>
  );
};

export default Drawer;
