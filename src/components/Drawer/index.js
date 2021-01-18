import React, { useRef, useCallback } from 'react';
import { View, Text } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { COLORS } from '../../styles/colors';
import Cart from '../Cart';

const DefaultC = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Ops, nothing here!</Text>
  </View>
);

const Drawer = React.memo(({ Screen, navigation, route }) => {
  const drawerRef = useRef(null);
  const Component = Screen || route?.params?.Screen || DefaultC;
  const memoizedClose = useCallback(() => drawerRef.current.closeDrawer(), [
    drawerRef,
  ]);
  const memoizedOpen = useCallback(() => drawerRef.current.openDrawer(), [
    drawerRef,
  ]);

  const renderDrawer = () => {
    return <Cart close={memoizedClose} />;
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
        <Component open={memoizedOpen} navigation={navigation} />
      </DrawerLayout>
    </View>
  );
});

export default Drawer;
