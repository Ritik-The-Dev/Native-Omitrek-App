import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { images } from "../constants";
import { CustomButton, FormField } from "../components";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={[styles.content, { minHeight: Dimensions.get("window").height - 100 }]}
        >
          <View style={styles.logoContainer}>
            <Image
              source={images.omitrek}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <Text style={styles.title}>
            Log in to Omitrek
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.input}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.input}
          />

          <CustomButton
            title="Sign In"
            containerStyles={styles.button}
          />

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>
              Don't have an account?
            </Text>
            <Text style={styles.signupText}>
              Signup
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    width:Dimensions.get("window").width
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 100,
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
    marginTop: 7,
  },
  button: {
    marginTop: 7,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#A9A9A9',
    fontFamily: 'pregular',
  },
  signupText: {
    fontSize: 16,
    color: 'green',
    fontFamily: 'psemibold',
    marginLeft: 5,
  },
});

export default SignIn;
