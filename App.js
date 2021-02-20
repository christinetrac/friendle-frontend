import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SignUpNavigation } from './navigation/SignUpNavigation';
import { HomeNavigation } from "./navigation/HomeNavigation";

export default function App() {
  let authenticated = false;

  const navigation = authenticated ? (
        <HomeNavigation/>
  ) : (
        <SignUpNavigation/>
  );

  return (
      <NavigationContainer>
        {navigation}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
