import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  touchable: (clr, active) => ({
    borderWidth: 2,
    borderRadius: 20,
    borderColor: clr,
    backgroundColor: active ? clr : 'transparent',
    padding: 5,
    alignItems: 'center',
    width: 115,
  }),
  text: (clr, active) => ({
    color: active ? COLORS.white : clr,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18,
  }),
  toggleFilter: (active) => ({
    position: 'absolute',
    top: 1,
    right: 7,
  }),
});

const FilterOption = ({ name, color, active, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.touchable(color, active)}
      onPress={() => onPress(name)}
    >
      {active && (
        <View style={styles.toggleFilter()}>
          <FontAwesome name="close" color="white" />
        </View>
      )}
      <Text style={styles.text(color, active)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default FilterOption;
