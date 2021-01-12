import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Number from './Number';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 70,
  },
});
const NumbersPad = ({ range, color, style }) => {
  const numbers = [...Array(range)].map((_, index) => (
    <Number color={color}>{index + 1}</Number>
  ));
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      {numbers}
    </ScrollView>
  );
};

export default NumbersPad;
