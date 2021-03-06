import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Hero from '../../../components/UI/Hero';
import PrimaryHeading from '../../../components/UI/Heading/Primary';
import RecoveryPasswordForm from '../../../components/UI/Form/RecoveryPassword';
import Layout from '../../../components/Layout';
import Footer from '../../../components/Layout/Footer';

const styles = StyleSheet.create({
  centerWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
});
const RecoveryPassword = ({
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
        <RecoveryPasswordForm navigation={navigation} />
      </ScrollView>
      <Footer />
    </Layout>
  );
};
export default RecoveryPassword;
