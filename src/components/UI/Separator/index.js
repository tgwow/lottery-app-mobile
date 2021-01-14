import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  separator: {
    width: 40,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.gray_light,
    marginVertical: 15,
    alignItems: 'center',
  },
});
const Separator = ({ style }) => {
  return (
    <View style={[styles.wrapper]}>
      <View style={[styles.separator, style]} />
    </View>
  );
};

export default Separator;
