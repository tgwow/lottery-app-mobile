import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../UI/Button';

const styles = StyleSheet.create({
  saveBackground: {
    backgroundColor: '#EBEBEB',
    paddingVertical: 30,
  },
});
const CartFooter = () => {
  return (
    <View style={styles.saveBackground}>
      <Button Icon={Ionicons} iconName="arrow-forward">
        Save
      </Button>
    </View>
  );
};

export default CartFooter;
