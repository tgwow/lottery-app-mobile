import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../../styles/colors';

const styles = StyleSheet.create({
  touchable: (isCart) => ({
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.primary,
    backgroundColor: isCart ? COLORS.primary : 'transparent',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: (isCart) => ({
    color: isCart ? COLORS.white : COLORS.primary,
    marginLeft: isCart ? 7 : 0,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
  }),
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const ControlOption = ({ name, isCart }) => {
  return (
    <TouchableOpacity style={styles.touchable(isCart)}>
      {isCart ? (
        <View style={styles.iconWrapper}>
          <Ionicons name="ios-cart-outline" color="white" size={25} />
          <Text style={styles.text(isCart)}>{name}</Text>
        </View>
      ) : (
        <Text style={styles.text(isCart)}>{name}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ControlOption;
