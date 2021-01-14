import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import Input from '../Input';
import Button from '../../Button';
import Form from '../index';
import { COLORS } from '../../../../styles/colors';
import { AuthContext } from '../../../../contexts/auth';
import Spinner from '../../Spinner';

const RecoveryValidation = {
  email: Yup.string()
    .email('Invalid email address.')
    .required('This field is required.'),
};

const RecoveryPassword = ({ navigation }) => {
  const { recoveryPassword, isLoading } = useContext(AuthContext);
  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object(RecoveryValidation)}
        onSubmit={(values, { setSubmitting }) => {
          recoveryPassword(values, navigation);
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
            <Button
              style={{ paddingVertical: 35 }}
              onPress={handleSubmit}
              Icon={isLoading ? false : Ionicons}
              iconName="arrow-forward"
            >
              {isLoading ? <Spinner /> : 'Submit'}
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

export default RecoveryPassword;
