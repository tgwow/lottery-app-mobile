import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Hero from '../../../components/UI/Hero';
import PrimaryHeading from '../../../components/UI/Heading/Primary';
import SignInForm from '../../../components/UI/Form/SignIn';
import Footer from '../../../components/Layout/Footer';
import Layout from '../../../components/Layout';

const styles = StyleSheet.create({
  centerWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
});
const SignIn = ({ navigation }) => {
  const title = 'Authentication';
  return (
    <Layout>
      <ScrollView>
        <View style={styles.centerWrapper}>
          <Hero fontSize={48} />
          <PrimaryHeading>{title}</PrimaryHeading>
        </View>
        <SignInForm navigation={navigation} />
      </ScrollView>
      <Footer />
    </Layout>
  );
};
export default SignIn;
