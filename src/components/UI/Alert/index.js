import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { COLORS } from '../../../styles/colors';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000088',
  },
  innerContainer: {
    height: '25%',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040',
    borderRadius: 10,
    padding: 6,
    elevation: 5,
  },
  header: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#00FF00',
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  body: {
    flex: 1,
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#FF6600',
    padding: 4,
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 2,
  },
  footer: {
    flex: 0.5,
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#0066FF',
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-evenly',
  },
  icon: {
    // borderWidth: 1,
    // borderColor: '#cc00cc',
    height: 35,
    width: 35,
  },
  title: {
    flex: 1,
    textAlign: 'justify',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    // borderWidth: 1,
    // borderColor: '#660066',
    padding: 2,
    marginHorizontal: 2,
  },
  message: {
    color: '#FFFFFF',
    textAlign: 'justify',
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  button: {
    width: '30%',
    paddingHorizontal: 6,
    marginVertical: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

const Alert = ({ isOpen, close, title, message, buttonText }) => {
  const onPositiveButtonPress = () => {};
  const onNegativeButtonPress = () => {
    close();
  };
  return (
    <Modal animationType="slide" transparent visible={isOpen}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{`${title}`}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.message}>{`${message}`}</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={onNegativeButtonPress}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
