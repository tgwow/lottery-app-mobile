import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  container: (small) => ({
    alignItems: 'center',
    width: small ? 80 : 100,
  }),
  hero: (fs, small) => ({
    textTransform: 'uppercase',
    fontSize: fs,
    fontFamily: 'Roboto_700Bold_Italic',
    color: COLORS.secondary,
    marginTop: small ? -10 : 0,
  }),
  horizontalBar: {
    width: '100%',
    backgroundColor: COLORS.primary,
    height: 7,
    borderRadius: 5,
  },
});
const Hero = ({ fontSize, size }) => {
  return (
    <View style={styles.container(size)}>
      <Text style={styles.hero(fontSize)}>TGL</Text>
      <View style={styles.horizontalBar} />
    </View>
  );
};

export default Hero;
