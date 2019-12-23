import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constans/colors";

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center"
  }
});

export default MainButton;
