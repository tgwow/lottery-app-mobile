import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../styles/colors';
import { AuthContext } from '../../../contexts/auth';
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
  boxIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexBasis: 100,
  },
});
const Header = ({ open }) => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.header}>
      <Hero fontSize={36} size="small" />
      <View style={styles.boxIcons}>
        <Ionicons
          onPress={open}
          name="ios-cart-outline"
          size={40}
          color={COLORS.primary}
        />
        <Ionicons
          onPress={signOut}
          name="log-out-outline"
          size={40}
          color={COLORS.gray_light}
        />
      </View>
    </View>
  );
};

export default Header;
