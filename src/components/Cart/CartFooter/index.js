import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { COLORS } from '../../../styles/colors';
import BetSummary from '../../Bet/BetSummary';
import Bold from '../../UI/Text/Bold';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: COLORS.tertiary,
    textTransform: 'uppercase',
    fontSize: 22,
  },
});
const CartBody = ({ totalPrice }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <BetSummary color={COLORS.lotofacil} name="Lotofácil" />
        <BetSummary color={COLORS.lotofacil} name="Lotofácil" />
        <BetSummary color={COLORS.mega_sena} name="Mega-Sena" />
        <BetSummary color={COLORS.lotomania} name="Lotomania" />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.price}>
          <Text style={{ fontWeight: '300' }}>
            <Bold style={{ fontStyle: 'italic' }}>Cart </Bold>Total:
          </Text>
        </Text>
        <Text style={styles.price}>
          <Bold>R$ {totalPrice}</Bold>
        </Text>
      </View>
    </View>
  );
};

export default CartBody;
