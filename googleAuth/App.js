/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const App = () => {


  return (
    <SafeAreaView style={{ flex: 1, margin: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Button title={'Sign in with Google'} onPress={() => {
        GoogleSignin.configure({
          androidClientId: '763859582408-rt60v05n4e954s29vvhkidebd97jasrh.apps.googleusercontent.com',
        });
        GoogleSignin.hasPlayServices().then((hasPlayService) => {
          if (hasPlayService) {
            GoogleSignin.signIn().then((userInfo) => {
              console.log(JSON.stringify(userInfo))
            }).catch((e) => {
              console.log("ERROR IS: " + JSON.stringify(e));
            })
          }
        }).catch((e) => {
          console.log("ERROR IS: " + JSON.stringify(e));
        })
      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
