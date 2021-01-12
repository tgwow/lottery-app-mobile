import React from 'react';
import { Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../Input';
import Button from '../../Button';
import Form from '../index';
import { COLORS } from '../../../../styles/colors';

const signInValidation = {
  email: Yup.string()
    .email('Invalid email address.')
    .required('This field is required.'),
};

const SignInForm = ({ navigation }) => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
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
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              name="email"
              placeholder="Email"
            />
            <Button
              style={{ paddingVertical: 35 }}
              onPress={handleSubmit}
              Icon={Ionicons}
              iconName="arrow-forward"
            >
              Submit
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

export default SignInForm;
