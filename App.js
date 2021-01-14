import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Roboto_700Bold_Italic, useFonts } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation';
import AuthProvider from './src/contexts/auth';
import Spinner from './src/components/UI/Spinner';

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
  if (!loaded) return <Spinner />;
  return (
    <AuthProvider>
      <NavigationContainer style={styles.container}>
        <StatusBar />
        <RootStackScreen />
      </NavigationContainer>
    </AuthProvider>
  );
}
