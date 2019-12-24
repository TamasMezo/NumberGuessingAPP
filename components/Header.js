import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";

import bar from "../assets/bar.png";
import Colors from "../constans/colors";
import TitleText from "../components/TitleText";

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <TitleText style={styles.title}>{props.title}</TitleText>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.1,
    paddingTop: 30,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0
  },
  titleContainer: {
    width: "70%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  title: {
    color: Platform.OS === "ios" ? Colors.secondary : Colors.primary
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
