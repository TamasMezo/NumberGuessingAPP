import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#666666",
    shadowOffset: {
      width: 0.5,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
