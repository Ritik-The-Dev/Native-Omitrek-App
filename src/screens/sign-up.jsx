import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import {CustomButton, FormField} from '../components';
import { images } from '../constants';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={[
            styles.content,
            {minHeight: Dimensions.get('window').height - 100},
          ]}>
          <View style={styles.logoContainer}>
            <Image
              source={images.omitrek}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <Text style={styles.title}>Sign Up to Omitrek</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={e => setForm({...form, username: e})}
            otherStyles={styles.input}
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={e => setForm({...form, email: e})}
            otherStyles={styles.input}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={e => setForm({...form, password: e})}
            otherStyles={styles.input}
          />

          <CustomButton title="Sign Up" containerStyles={styles.button} />

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>Have an account already?</Text>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20
  },
  logo: {
    width: 150,
    height: 100,
  },
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    width: Dimensions.get('window').width,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'psemibold',
  },
  input: {
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    marginBottom: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#A9A9A9',
    fontFamily: 'pregular',
  },
  loginText: {
    fontSize: 16,
    color: 'green',
    fontFamily: 'psemibold',
    marginLeft: 5,
  },
});

export default SignUp;
