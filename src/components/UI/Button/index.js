import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  default: (clr, left) => ({
    fontSize: 36,
    fontWeight: '700',
    color: !clr ? COLORS.primary : clr,
    fontStyle: 'italic',
    marginLeft: left ? 10 : 0,
    marginRight: left ? 0 : 10,
    lineHeight: 36,
  }),
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const Button = ({
  children,
  onPress,
  color,
  Icon,
  iconName,
  isLeft,
  style,
}) => {
  const icon = Icon ? (
    <Icon
      style={{ color: color || COLORS.primary }}
      name={iconName}
      size={38}
    />
  ) : null;
  const content = (
    <>
      {isLeft && icon}
      <Text
        style={{ ...styles.default(color, isLeft), ...style }}
        onPress={onPress}
      >
        {children}
      </Text>
      {!isLeft && icon}
    </>
  );
  return <View style={styles.wrapper}>{content}</View>;
};

export default Button;
