import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MyText from '../../UI/Text';
import Bold from '../../UI/Text/Bold';

const styles = StyleSheet.create({
  wrapper: {
    lineHeight: 24,
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
const BetDescription = ({ description, style }) => {
  return (
    <MyText style={[styles.wrapper, style]}>
      <Text style={styles.title}>Fill your bet{'\n'}</Text>
      <Text>
        Mark as <Bold>many numbers</Bold> as you want up to a
        <Bold> maximum of 50.{'\n'}</Bold>
      </Text>
      <Text>
        Win by hitting <Bold>15, 16, 17, 18, 19, 20 </Bold>
        or<Bold> none </Bold>
        of the<Bold> 20 numbers drawn</Bold>
      </Text>
    </MyText>
  );
};

export default BetDescription;
