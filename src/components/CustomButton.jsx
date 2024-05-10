import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        containerStyles,
        isLoading && styles.disabledButton,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.spinner}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#6B46E9',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
    minHeight: 62,
    width:Dimensions.get("window").width*0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'psemibold',
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
  spinner: {
    marginLeft: 10,
  },
});

export default CustomButton;
