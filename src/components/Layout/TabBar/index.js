import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Text from '../../UI/Text';
import { COLORS } from '../../../styles/colors';
import Separator from '../../UI/Separator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingTop: 15,
    paddingBottom: 5,
    elevation: 15,
  },
  touchable: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  label: {
    color: COLORS.gray_light,
    fontSize: 18,
  },
  isFocused: {
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  separator: (isFocused) => ({
    position: 'absolute',
    marginVertical: 0,
    top: -15,
    height: 4,
    backgroundColor: isFocused ? COLORS.primary : COLORS.gray_light,
  }),
});
const TabBar = ({ state, descriptors, navigation, style }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (!focusedOptions.tabBarVisible === false) return null;
  return (
    <View style={[styles.container, style]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        let label =
          // eslint-disable-next-line no-nested-ternary
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPres',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented)
            navigation.navigate(route.name);
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName;
        let size = 30;
        let iconStyle;

        if (route.name === 'Home') {
          iconName = isFocused ? 'md-home' : 'md-home-outline';
        } else if (route.name === 'Profile') {
          iconName = isFocused ? 'person' : 'person-outline';
        } else {
          iconName = 'md-add-circle';
          size = 100;
          label = '';
          iconStyle = {
            position: 'absolute',
            top: -45,
            elevation: 25,
          };
        }
        const icon = (
          <>
            {route.name !== 'NewBet' && (
              <Separator style={styles.separator(isFocused)} />
            )}
            <Ionicons
              style={iconStyle}
              name={iconName}
              size={size}
              color={isFocused ? COLORS.primary : COLORS.gray_light}
            />
          </>
        );
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.touchable}
            key={route.key}
          >
            {icon}
            <Text style={[styles.label, isFocused ? styles.isFocused : {}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
