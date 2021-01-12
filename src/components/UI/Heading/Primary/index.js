import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../../Text';
import { COLORS } from '../../../../styles/colors';

const styles = StyleSheet.create({
  text: {
    color: COLORS.secondary,
    fontSize: 38,
    fontWeight: '700',
    marginTop: 15,
  },
});
const PrimaryHeading = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default PrimaryHeading;
