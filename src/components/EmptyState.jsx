import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { images } from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.empty}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <CustomButton
        title="Back to Explore"
        // handlePress={() => router.push("/home")}
        containerStyles={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 270,
    height: 216,
  },
  title: {
    fontSize: 16,
    fontFamily: "pmedium",
    color: "#7F7F7F",
    marginTop: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "psemibold",
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
});

export default EmptyState;
