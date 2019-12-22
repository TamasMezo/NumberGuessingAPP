import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import bar from "../assets/bar.png";

import Colors from "../constans/colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
      <View style={styles.barContainer}>
        <TouchableOpacity>
          <Image style={styles.bar} source={bar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  titleContainer: {
    width: "70%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "open-sans-bold"
  },
  barContainer: {
    flex: 1,
    marginRight: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  bar: {
    width: 20,
    height: 20
  }
});

export default Header;
