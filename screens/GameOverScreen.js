import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Image
} from "react-native";
import Colors from "../constans/colors";
import whiteBg from "../assets/whiteBg.jpg";
import Header from "../components/Header";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <ImageBackground
      source={whiteBg}
      style={{
        width: "100%",
        height: "105%"
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.text}>The game is over!</TitleText>
        <View style={styles.imageContainer}>
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
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 23,
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
    borderRadius: 125,
    borderWidth: 3,
    borderColor: "black",
    width: 250,
    height: 250,
    overflow: "hidden",
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  resultContainer: {
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 50
  }
});

export default GameOverScreen;
