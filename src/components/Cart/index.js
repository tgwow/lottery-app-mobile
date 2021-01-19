import React from 'react';
import { useSelector, connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import CartHeader from './CartHeader';
import CartBody from './CartBody';
import CartFooter from './CartFooter';
import { Creators as cartCreators } from '../../redux/ducks/cart';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 55,
    flex: 1,
  },
});
const Cart = React.memo(({ close, removeFromCart, saveBets, navigation }) => {
  const { bets, totalPrice } = useSelector((state) => state.cartReducer);
  return (
    <>
      <View style={styles.container}>
        <CartHeader onClose={close} />
        <CartBody bets={bets} remove={removeFromCart} totalPrice={totalPrice} />
      </View>
      <CartFooter
        save={saveBets}
        bets={bets}
        onClose={close}
        navigation={navigation}
      />
    </>
  );
});

export default connect(null, { ...cartCreators })(Cart);
