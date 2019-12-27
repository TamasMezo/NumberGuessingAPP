import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Platform } from "react-native";

import Colors from "../constans/colors";
import TitleText from "../components/TitleText";

const Header = props => {
  const [componentWidth, setComponentWidth] = useState(
    Dimensions.get("window").width
  );
  const [componentHeigth, setComponentHeigth] = useState(
    Dimensions.get("window").height * 0.11
  );

  useEffect(() => {
    const changeLayout = () => {
      setComponentWidth(Dimensions.get("window").width);
      if (Dimensions.get("window").height > 450) {
        setComponentHeigth(Dimensions.get("window").height * 0.11);
      } else {
        setComponentHeigth(Dimensions.get("window").height * 0.2);
      }
    };

    Dimensions.addEventListener("change", changeLayout);
    return () => {
      Dimensions.removeEventListener("change", changeLayout);
    };
  });
  return (
    <View
      style={{
        ...styles.header,
        ...{ width: componentWidth, height: componentHeigth },
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <TitleText style={styles.title}>{props.title}</TitleText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary
  },
  title: {
    color: Platform.OS === "ios" ? Colors.secondary : "white"
  }
});

export default Header;
