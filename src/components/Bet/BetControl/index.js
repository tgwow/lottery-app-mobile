import React from 'react';
import { View, StyleSheet } from 'react-native';
import ControlOption from './ControlOption';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const BetControl = ({ style }) => {
  return (
    <View style={[styles.wrapper, style]}>
      <ControlOption name="Complete game" />
      <ControlOption name="Clear game" />
      <ControlOption name="Add to cart" isCart />
    </View>
  );
};

export default BetControl;
