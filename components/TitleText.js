import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constans/colors";

const BodyText = props => {
  return (
    <Text style={{ ...styles.headerTitle, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontFamily: "open-sans-bold"
  }
});

export default BodyText;
