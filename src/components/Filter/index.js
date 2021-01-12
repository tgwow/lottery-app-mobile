import React from 'react';
import { View, StyleSheet } from 'react-native';
import FilterOption from './FilterOption';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Filter = (props) => {
  return (
    <View style={styles.wrapper}>
      <FilterOption name="Lotofácil" color={COLORS.lotofacil} active />
      <FilterOption name="Mega-Sena" color={COLORS.mega_sena} />
      <FilterOption name="Lotomania" color={COLORS.lotomania} active />
    </View>
  );
};

export default Filter;
