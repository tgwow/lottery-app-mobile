import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Number from '../NumbersPad/Number';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 50,
    height: 'auto',
    justifyContent: 'flex-start',
  },
});
const SelectedNumbers = ({ onPress, selectedNums, color, style }) => {
  const numbers = selectedNums.map((num) => (
    // eslint-disable-next-line react/no-array-index-key
    <Number key={num} color={color} onPress={onPress} active size={40}>
      {num}
    </Number>
  ));
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      {numbers}
    </ScrollView>
  );
};

export default SelectedNumbers;
