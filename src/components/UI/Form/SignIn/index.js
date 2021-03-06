import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import Input from '../Input';
import Button from '../../Button';
import Form from '../index';
import { COLORS } from '../../../../styles/colors';
import { AuthContext } from '../../../../contexts/auth';
import Spinner from '../../Spinner';

const styles = StyleSheet.create({
  customText: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    color: COLORS.gray_light,
    textAlign: 'right',
    marginRight: 25,
    marginTop: 25,
    marginBottom: 20,
  },
  centerIcon: {
    position: 'absolute',
    right: 25,
    zIndex: 9,
  },
});

const signInValidation = {
  email: Yup.string()
    .email('Invalid email address.')
    .required('This field is required.'),
  password: Yup.string()
    .min(6, 'Password must have 6 characters at least.')
    .required('This field is required.'),
};

const SignInForm = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, isLoading } = useContext(AuthContext);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Formik
        initialValues={{ email: 'admin@admin.com', password: 'admin12' }}
        validationSchema={Yup.object(signInValidation)}
        onSubmit={(values, { setSubmitting }) => {
          signIn(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form>
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
            <Text
              style={styles.customText}
              onPress={() => {
                navigation.push('RecoveryPassword', {
                  title: 'Recovery Password',
                });
              }}
            >
              I forget my password
            </Text>
            <Button
              style={{ paddingVertical: 35 }}
              onPress={handleSubmit}
              Icon={isLoading ? false : Ionicons}
              iconName="arrow-forward"
            >
              {isLoading ? <Spinner /> : 'Log In'}
            </Button>
          </Form>
        )}
      </Formik>
      <Button
        onPress={() => {
          navigation.push('SignUp', {
            title: 'Registration',
          });
        }}
        color={COLORS.secondary}
        Icon={Ionicons}
        iconName="arrow-forward"
      >
        Sign Up
      </Button>
    </>
  );
};

export default SignInForm;
