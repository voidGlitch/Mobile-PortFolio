import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "./component/Menu";

const Home = ({ channelName }) => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo eveniet incidunt natus.";
  return (
    <View style={styles.maincontainer}>
      <View style={styles.hometop}>
        <Image
          style={styles.headerimage}
          source={require("../assets/Coding.jpg")}
          resizeMode="contain"
        />
        <Text style={styles.mainheader}>Welcome to</Text>
        <Text
          style={[
            styles.mainheader,
            {
              fontSize: 33,
              color: '"#4C5DAB',
              marginTop: 0,
            },
          ]}
        >
          {channelName}
          {/* Miku */}
        </Text>
        <Text style={styles.parastyle}>{description}</Text>
      </View>
      <View style={styles.menuStyles}>
        <View style={styles.lineStyles}></View>
        <Menu />
        <View
          style={[
            styles.lineStyles,
            {
              marginVertical: 20,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  hometop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerimage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  mainheader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  parastyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    paddingBottom: 50,
    marginTop: 30,
    lineHeight: 26,
  },
  lineStyles: {
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});
