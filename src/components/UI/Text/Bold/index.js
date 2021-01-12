import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
});
const Bold = ({ children, style }) => {
  return <Text style={[styles.bold, style]}>{children}</Text>;
};

export default Bold;
