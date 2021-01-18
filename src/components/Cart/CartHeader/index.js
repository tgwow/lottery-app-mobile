import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
    marginLeft: -7,
  },
});
const CartHeader = ({ onClose }) => {
  return (
    <>
      <View style={styles.close}>
        <Ionicons
          onPress={onClose}
          name="md-close"
          size={35}
          color={COLORS.primary}
        />
      </View>
      <View style={styles.header}>
        <Ionicons name="ios-cart-outline" size={35} color={COLORS.primary} />
        <SecondaryHeading style={{ marginLeft: 10 }}>Cart</SecondaryHeading>
      </View>
    </>
  );
};

export default CartHeader;
