import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    color: COLORS.tertiary,
  },
});
const Text = ({ children, style }) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

export default Text;
