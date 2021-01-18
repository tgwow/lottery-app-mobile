import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Number from './Number';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
});
const NumbersPad = ({ onPress, selectedNums, range, color, style }) => {
  const numbers = [...Array(range)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Number
      /* eslint-disable-next-line react/no-array-index-key */
      key={index}
      color={color}
      onPress={onPress}
      active={selectedNums.includes(index + 1)}
    >
      {index + 1}
    </Number>
  ));
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      {numbers}
    </ScrollView>
  );
};

export default NumbersPad;
