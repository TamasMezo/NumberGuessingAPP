import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import whiteBg from "../assets/whiteBg.jpg";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  const [componentWidth, setComponentWidth] = useState(
    Dimensions.get("window").width
  );
  const [componentHeigth, setComponentHeigth] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const changeLayout = () => {
      setComponentWidth(Dimensions.get("window").width);
      setComponentHeigth(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", changeLayout);
    return () => {
      Dimensions.removeEventListener("change", changeLayout);
    };
  });

  return (
    <ScrollView
      contentContainerStyle={{ width: componentWidth, height: componentHeigth }}
    >
      <ImageBackground
        source={whiteBg}
        style={{
          width: componentWidth,
          height: componentHeigth
        }}
      >
        <View
          style={{
            ...styles.screen,
            ...{ width: componentWidth, height: componentHeigth }
          }}
        >
          <TitleText style={styles.text}>The game is over!</TitleText>
          <View
            style={{
              ...styles.imageContainer,
              ...{
                width: componentWidth * 0.6,
                height: componentWidth * 0.6,
                borderRadius: (componentWidth * 0.6) / 2
              }
            }}
          >
            <Image
              fadeDuration={500}
              source={require("../assets/success.png")} //local image
              /* source={{
                  uri:
                    "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg"
                }} */
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.resultContainer}>
            <BodyText style={styles.text}>
              Number of roundes:
              <Text style={styles.highlight}> {props.roundsNumber} </Text>
              Number was:
              <Text style={styles.highlight}> {props.userNumber} </Text>
            </BodyText>
            <MainButton onPress={props.onRestart}>New game</MainButton>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  text: {
    fontSize: Dimensions.get("window").width > 350 ? 22 : 18,
    textAlign: "center",
    marginVertical: Dimensions.get("window").width / 25,
    marginTop: Dimensions.get("window").height * 0.1,
    alignItems: "center",
    justifyContent: "center"
  },
  highlight: {
    color: "#0ec217",
    fontFamily: "open-sans-bold"
  },

  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 40,
    alignItems: "center",
    justifyContent: "center"
  },
  resultContainer: {
    textAlign: "center",
    marginVertical: Dimensions.get("window").width > 350 ? 20 : 10,
    marginHorizontal: Dimensions.get("window").width > 350 ? 50 : 10
  }
});

export default GameOverScreen;
