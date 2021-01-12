import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';
import { useField } from 'formik';

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 2,
    borderBottomColor: '#EBEBEB',
    paddingHorizontal: 20,
    paddingVertical: 25,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '700',
    zIndex: 8,
  },
  err: (show) => ({
    color: 'orangered',
    transform: show ? [{ translateY: -24 }] : [{ translateY: -4 }],
    opacity: show ? 1 : 0,
    display: show ? 'flex' : 'none',
    position: 'absolute',
    bottom: -20,
    left: 18,
  }),
});
const Input = ({ ...props }) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [field, meta] = useField(props);
  return (
    <View>
      <TextInput {...props} style={styles.wrapper} />
      {meta.error && meta.touched && (
        <Text style={styles.err(meta.error)}>{meta.error}</Text>
      )}
    </View>
  );
};

export default Input;
