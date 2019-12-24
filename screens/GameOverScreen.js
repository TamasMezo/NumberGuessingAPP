import React from "react";
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
  return (
    <ScrollView>
      <ImageBackground
        source={whiteBg}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height
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
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
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
