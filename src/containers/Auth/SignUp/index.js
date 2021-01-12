import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Hero from '../../../components/UI/Hero';
import PrimaryHeading from '../../../components/UI/Heading/Primary';
import SignUpForm from '../../../components/UI/Form/SignUp';
import Footer from '../../../components/Layout/Footer';
import Layout from '../../../components/Layout';

const styles = StyleSheet.create({
  centerWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
});
const SignUp = ({
  navigation,
  route: {
    params: { title },
  },
}) => {
  return (
    <Layout>
      <ScrollView>
        <View style={styles.centerWrapper}>
          <Hero fontSize={48} />
          <PrimaryHeading>{title}</PrimaryHeading>
        </View>
        <SignUpForm navigation={navigation} />
      </ScrollView>
      <Footer />
    </Layout>
  );
};
export default SignUp;
