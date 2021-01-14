import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartHeader from './CartHeader';
import CartBody from './CartBody';
import CartFooter from './CartFooter';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 55,
    flex: 1,
  },
});
const Cart = ({ close }) => {
  return (
    <>
      <View style={styles.container}>
        <CartHeader onClose={close} />
        <CartBody totalPrice={7.5} />
      </View>
      <CartFooter />
    </>
  );
};

export default Cart;
