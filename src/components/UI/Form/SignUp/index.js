import React, { useState } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../Input';
import Button from '../../Button';
import Form from '../index';
import { COLORS } from '../../../../styles/colors';

const styles = StyleSheet.create({
  customText: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    color: COLORS.gray_light,
    textAlign: 'right',
    marginRight: 25,
    marginTop: 25,
    marginBottom: 50,
  },
  centerIcon: {
    position: 'absolute',
    right: 25,
    zIndex: 9,
  },
});

const signInValidation = {
  name: Yup.string().required('This field is required.'),
  email: Yup.string()
    .email('Invalid email address.')
    .required('This field is required.'),
  password: Yup.string()
    .min(6, 'Password must have 6 characters at least.')
    .required('This field is required.'),
};

const SignUpForm = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object(signInValidation)}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            Alert.alert(JSON.stringify(values));
          }, 1000);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <Input
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              name="name"
              placeholder="Name"
            />
            <Input
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              name="email"
              placeholder="Email"
            />
            <View style={{ justifyContent: 'center' }}>
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                name="password"
                placeholder="Password"
                secureTextEntry={!showPassword}
              />
              <Ionicons
                style={styles.centerIcon}
                name={`${
                  showPassword ? 'md-eye-off-outline' : 'md-eye-outline'
                }`}
                size={30}
                onPress={handleTogglePassword}
                color={COLORS.gray_light}
              />
            </View>
            <Button
              style={{ paddingVertical: 30 }}
              onPress={handleSubmit}
              Icon={Ionicons}
              iconName="arrow-forward"
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Button
        onPress={() => {
          navigation.pop();
        }}
        color={COLORS.secondary}
        Icon={Ionicons}
        iconName="arrow-back"
        isLeft
      >
        Back
      </Button>
    </>
  );
};
export default SignUpForm;
