import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constans/colors";

const numberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: Colors.secondary
  }
});

export default numberContainer;
