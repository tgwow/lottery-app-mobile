import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 30,
    flex: 1,
  },
});

const Layout = ({ children }) => <View style={styles.wrapper}>{children}</View>;

export default Layout;
