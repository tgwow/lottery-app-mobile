import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  footer: {
    color: COLORS.secondary,
    textAlign: 'center',
    fontSize: 14,
    paddingBottom: 5,
  },
});
const Footer = () => {
  return (
    <Text style={styles.footer}>
      Copyright {new Date().getFullYear()} Luby Software
    </Text>
  );
};

export default Footer;
