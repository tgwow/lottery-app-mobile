import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../styles/colors';
import SecondaryHeading from '../../UI/Heading/Secondary';

const styles = StyleSheet.create({
  close: {
    alignItems: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
const CartHeader = () => {
  return (
    <>
      <View style={styles.close}>
        <Ionicons name="md-close" size={35} color={COLORS.primary} />
      </View>
      <View style={styles.header}>
        <Ionicons name="md-close" size={35} color={COLORS.primary} />
        <SecondaryHeading>Cart</SecondaryHeading>
      </View>
    </>
  );
};

export default CartHeader;
