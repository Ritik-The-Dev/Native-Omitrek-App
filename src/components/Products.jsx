import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Products = ({ img, name, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={img}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    backgroundColor: "white",
    width: 158,
    height: 190,
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: "#D9D9D9",
    width: 158,
    height: 128,
    padding: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 119,
    height: 119,
  },
  name: {
    width: 96,
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 10,
    fontSize: 14,
    fontWeight:'800',
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  price: {
    height: 20,
    textAlign: "center",
    fontWeight:'900',
    marginTop: 4,
    marginLeft: 2,
    fontSize: 14,
    lineHeight: 18,
  },
  button: {
    backgroundColor: "#23B05B",
    width: 75,
    height: 20,
    borderRadius: 8,
    padding: 2,
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
  },
  buttonText: {
    color: "white",
    width: 47,
    height: 20,
    marginTop: 5,
    fontSize: 9,
    lineHeight: 12,
    textAlign: "center",
  },
});

export default Products;
