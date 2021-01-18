import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../../../styles/colors';

const styles = StyleSheet.create({
  number: (isActive, color, size) => ({
    color: 'white',
    width: size || 65,
    height: size || 65,
    borderRadius: 50,
    backgroundColor: isActive ? color : COLORS.numberBg,
    fontSize: size ? 14 : 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginVertical: 3,
    marginHorizontal: 2,
  }),
  close: {
    position: 'absolute',
    top: 9,
    right: 10,
    color: 'red',
    zIndex: 9,
  },
});
const Number = ({ color, children, onPress, active, size }) => {
  return (
    <TouchableOpacity id={children} onPress={() => onPress(children)}>
      {size && (
        <View style={styles.close}>
          <FontAwesome name="close" size={9} color={COLORS.white} />
        </View>
      )}
      <Text style={styles.number(active, color, size)}>
        {children.toString().padStart(2, 0)}
      </Text>
    </TouchableOpacity>
  );
};

export default Number;
