import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { Roboto_700Bold_Italic, useFonts } from '@expo-google-fonts/roboto';
// import { Constants } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation';
import { COLORS } from './src/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [loaded] = useFonts({ Roboto_700Bold_Italic });
  if (!loaded) return <ActivityIndicator size="large" color={COLORS.primary} />;
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar />
      <RootStackScreen />
    </NavigationContainer>
  );
}
