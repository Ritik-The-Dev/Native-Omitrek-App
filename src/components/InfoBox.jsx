import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={[styles.title, titleStyles]}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    color: "black",
    fontFamily: "psemibold",
    textAlign: "center",
  },
  subtitle: {
    color: "#7F7F7F",
    fontFamily: "pregular",
    fontSize: 14,
    textAlign: "center",
  },
});

export default InfoBox;
