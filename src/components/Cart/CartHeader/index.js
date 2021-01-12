import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../styles/colors';
import SecondaryHeading from '../UI/Heading/Secondary';
import Button from '../UI/Button';
import Bold from '../UI/Text/Bold';
import BetSummary from '../Bet/BetSummary';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 55,
    flex: 1,
  },
  close: {
    alignItems: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  saveBackground: {
    backgroundColor: '#EBEBEB',
    paddingVertical: 30,
  },
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
const Cart = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.close}>
          <Ionicons name="md-close" size={35} color={COLORS.primary} />
        </View>
        <View style={styles.header}>
          <Ionicons name="md-close" size={35} color={COLORS.primary} />
          <SecondaryHeading>Cart</SecondaryHeading>
        </View>
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
              <Bold>R$ 7,50</Bold>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.saveBackground}>
        <Button Icon={Ionicons} iconName="arrow-forward">
          Save
        </Button>
      </View>
    </>
  );
};

export default Cart;
