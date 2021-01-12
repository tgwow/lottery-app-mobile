import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../styles/colors';

const styles = StyleSheet.create({
  number: (isActive, color) => ({
    color: 'white',
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: isActive ? color : COLORS.numberBg,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginVertical: 4,
  }),
});
const Number = ({ color, children }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.number(false, color)}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Number;
