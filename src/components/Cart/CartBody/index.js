import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { COLORS } from '../../../styles/colors';
import BetSummary from '../../Bet/BetSummary';
import Bold from '../../UI/Text/Bold';
import MyText from '../../UI/Text';
import { formatMoney } from '../../../utils/currency';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: COLORS.tertiary,
    textTransform: 'uppercase',
    fontSize: 22,
    paddingRight: 8,
  },
  message: {
    marginTop: 10,
  },
});
const CartBody = ({ bets, totalPrice, remove }) => {
  let content = (
    <View style={styles.message}>
      <MyText>Do a bet and start compete for great prizes.!</MyText>
    </View>
  );

  if (bets.length > 0) {
    content = bets.map((bet) => (
      <BetSummary
        key={bet.id}
        id={bet.id}
        color={bet.color}
        name={bet.name}
        price={bet.price}
        date={bet.due_date}
        numbers={bet.numbers}
        cart
        remove={remove}
      />
    ));
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>{content}</ScrollView>
      <View style={styles.footer}>
        <Text style={styles.price}>
          <Text style={{ fontWeight: '300' }}>
            <Bold style={{ fontStyle: 'italic' }}>Cart </Bold>Total:
          </Text>
        </Text>
        <Text style={styles.price}>
          <Bold>R$ {formatMoney(totalPrice)}</Bold>
        </Text>
      </View>
    </View>
  );
};

export default CartBody;
