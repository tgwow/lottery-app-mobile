import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../styles/colors';
import Hero from '../../UI/Hero';

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white,
    color: COLORS.secondary,
    fontSize: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
const Header = () => {
  return (
    <View style={styles.header}>
      <Hero fontSize={36} size="small" />
      <Ionicons name="log-out-outline" size={40} color={COLORS.gray_light} />
    </View>
  );
};

export default Header;
