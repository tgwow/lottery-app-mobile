import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  touchable: (clr, active) => ({
    borderWidth: 2,
    borderRadius: 20,
    borderColor: clr,
    backgroundColor: active ? clr : 'transparent',
    padding: 5,
    alignItems: 'center',
    width: 110,
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
    top: 0,
    right: 6,
  }),
});

const FilterOption = ({ name, color, active }) => {
  return (
    <TouchableOpacity style={styles.touchable(color, active)}>
      {active && (
        <View style={styles.toggleFilter()}>
          <Ionicons name="close" color="white" />
        </View>
      )}
      <Text style={styles.text(color, active)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default FilterOption;
