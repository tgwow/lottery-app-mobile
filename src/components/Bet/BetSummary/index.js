import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns';
import { COLORS } from '../../../styles/colors';
import { formatMoney } from '../../../utils/currency';

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
  trash: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -10 }],
    right: 5,
  },
});
const BetSummary = ({
  id,
  name,
  numbers,
  color,
  date,
  price,
  cart,
  remove,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.verticalBar(color)} />
      <View style={styles.main}>
        <Text style={styles.numbers}>{numbers}</Text>
        <Text style={styles.info}>
          <Text>{format(new Date(date), 'yyyy/MM/dd')}</Text>
          <Text> - </Text>
          <Text>{formatMoney(price)}</Text>
        </Text>
        {cart && (
          <View style={styles.trash}>
            <Ionicons
              name="trash-outline"
              size={20}
              color={COLORS.secondary}
              onPress={() => remove(id, price)}
            />
          </View>
        )}
        <Text style={styles.name(color)}>{name}</Text>
      </View>
    </View>
  );
};

export default BetSummary;
