import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../UI/Button';
import Spinner from '../../UI/Spinner';

const styles = StyleSheet.create({
  saveBackground: {
    backgroundColor: '#ebebeb',
    paddingVertical: 30,
  },
});
const CartFooter = ({ save, bets }) => {
  const { isLoading } = useSelector((state) => state.cartReducer);
  const handleSaveBets = () => {
    const betsArr = bets.map((bet) => ({
      numbers: bet.numbers,
      type_id: bet.type_id,
      due_date: bet.due_date,
    }));
    save(betsArr);
  };
  return (
    <View style={styles.saveBackground}>
      <Button
        Icon={isLoading ? false : Ionicons}
        iconName="arrow-forward"
        onPress={handleSaveBets}
      >
        {isLoading ? <Spinner /> : 'Save'}
      </Button>
    </View>
  );
};

export default CartFooter;
