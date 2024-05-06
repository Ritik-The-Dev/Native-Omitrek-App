import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { images } from "../constants";

const Slides = () => {
  const Images = [
    images.Slide1,
    images.Slide1,
    images.Slide1,
    images.Slide1,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to automatically change image after 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentIndex, Images.length]);

  return (
    <View style={styles.container}>
      {Images.map((image, index) => (
        <Image
          key={index}
          source={image}
          resizeMode="contain"
          style={styles.image}
          alt={`Slide ${index}`}
        />
      ))}
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: width * 0.5, // Adjusted height based on window width
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: -10,
    width: width, // Adjusted width based on window width
    height: "100%",
  },
});

export default Slides;
