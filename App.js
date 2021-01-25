/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,

  View,

  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StatusBar, StyleSheet
} from 'react-native';
import { color } from 'react-native-reanimated';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import assets from './app/assets';
import { OutlineButton } from './app/components/Button';
import { InputText } from './app/components/Input';
import colors from './app/constants/colors';


const App: () => React$Node = (containerStyle) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ margin: 100 }}>

        <InputText
          placeholder='Full name'
          icon={assets.user_ic}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
    alignItems: 'center'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
