import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

const Category = ({ img, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  imageContainer: {
    backgroundColor: "#D9D9D9",
    width: 82,
    height: 82,
    padding: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 73,
    height: 49,
  },
  text: {
    width: 82,
    textAlign: "center",
    fontSize: 11,
    lineHeight: 14,
  },
});

export default Category;

