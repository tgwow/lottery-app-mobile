import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../../Text';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '300',
  },
});
const TertiaryHeading = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TertiaryHeading;
