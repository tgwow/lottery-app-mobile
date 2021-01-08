import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../../styles/colors';

const styles = StyleSheet.create({
  text: {
    color: COLORS.secondary,
    fontStyle: 'italic',
    fontSize: 38,
    fontWeight: '700',
  },
});
const PrimaryHeading = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default PrimaryHeading;
