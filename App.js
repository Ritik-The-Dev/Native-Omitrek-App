import React from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationProvider, Layout} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import TabNavigator from './src/Navigator/TabNavigator';
import Wishlist from './src/screens/Wishlist';
import Profile from './src/screens/profile';
import SignIn from './src/screens/sign-in';
import SignUp from './src/screens/sign-up';
import Home from './src/screens/Home';
import Cart from './src/screens/cart';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Home />
      </Layout>
    </ApplicationProvider>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});