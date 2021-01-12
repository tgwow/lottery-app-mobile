import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.border,
    marginBottom: 30,
    marginTop: 20,
  },
});
const Form = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default Form;
