import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../../styles/colors';

const Spinner = (props) => {
  return <ActivityIndicator color={COLORS.primary} size="large" {...props} />;
};

export default Spinner;
