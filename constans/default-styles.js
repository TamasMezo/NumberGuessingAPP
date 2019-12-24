import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
    fontSize: Dimensions.get("window").heigth < 600 ? 30 : 20
  },
  title: {
    fontFamily: "open-sans-bold"
  }
});
