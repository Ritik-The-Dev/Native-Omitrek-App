import React from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationProvider, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Profile from './src/screens/profile';
import Wishlist from './src/screens/Wishlist';
import SignIn from './src/screens/sign-in';
import SignUp from './src/screens/sign-up';
import TabNavigator from './src/Navigator/TabNavigator';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{animation: 'slide_from_bottom'}}
          />
        </Stack.Navigator>
        {/* <Home /> */}
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
