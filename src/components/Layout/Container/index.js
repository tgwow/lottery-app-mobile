import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: COLORS.background,
    flex: 1,
  },
});
const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default Container;
