import React from 'react';
import { View, StyleSheet } from 'react-native';
import ControlOption from './ControlOption';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const BetControl = ({ style, completeGame, clearGame, addToCart }) => {
  return (
    <View style={[styles.wrapper, style]}>
      <ControlOption name="Complete game" onPress={completeGame} />
      <ControlOption name="Clear game" onPress={clearGame} />
      <ControlOption name="Add to cart" isCart onPress={addToCart} />
    </View>
  );
};

export default BetControl;
