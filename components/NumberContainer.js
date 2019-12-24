import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

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
    marginVertical: Dimensions.get("window").height < 500 ? 5 : 10,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").height < 500 ? 50 : 100,
    height: Dimensions.get("window").height < 500 ? 50 : 100
  },
  number: {
    color: Colors.primary,
    fontSize: Dimensions.get("window").height < 500 ? 20 : 40
  }
});

export default numberContainer;
