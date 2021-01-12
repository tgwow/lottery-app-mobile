import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    alignContent: 'center',
    paddingLeft: 25,
    marginTop: 25,
  },
  verticalBar: (clr) => ({
    position: 'absolute',
    backgroundColor: clr,
    height: '100%',
    width: 7,
    borderRadius: 5,
  }),
  name: (clr) => ({
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',

    color: clr,
  }),
  main: {
    paddingVertical: 3,
  },
  numbers: {
    color: COLORS.tertiary,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  info: {
    color: COLORS.tertiary,
    paddingTop: 6,
    paddingBottom: 8,
  },
});
const BetSummary = ({ color, name }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.verticalBar(color)} />
      <View style={styles.main}>
        <Text style={styles.numbers}>
          01, 02, 03, 04, 05, 07, 09, 12, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25
        </Text>
        <Text style={styles.info}>
          <Text>30/11/2020</Text>
          <Text> - </Text>
          <Text>(R$ 2,50)</Text>
        </Text>
        <Text style={styles.name(color)}>{name}</Text>
      </View>
    </View>
  );
};

export default BetSummary;
