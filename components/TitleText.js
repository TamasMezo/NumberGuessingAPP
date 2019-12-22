import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = props => {
  return (
    <Text style={{ ...styles.headerTitle, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "open-sans-bold"
  }
});

export default BodyText;
