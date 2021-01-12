import React from 'react';
import { View, Text } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { COLORS } from '../../styles/colors';
import Cart from '../Cart';

const Drawer = ({ children }) => {
  const handleDrawerSlide = (status) => {
    // outputs a value between 0 and 1
    console.log(status);
  };

  const renderDrawer = () => {
    return <Cart />;
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerLayout
        drawerWidth={300}
        drawerPosition={DrawerLayout.positions.Right}
        drawerType="front"
        drawerBackgroundColor={COLORS.white}
        renderNavigationView={renderDrawer}
        onDrawerSlide={handleDrawerSlide}
      >
        <View style={{ flex: 1 }}>{children}</View>
      </DrawerLayout>
    </View>
  );
};

export default Drawer;
