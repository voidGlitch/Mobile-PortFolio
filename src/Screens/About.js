import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Shreshthav Bisht</Text>
      <Text style={styles.paraStyles}>
        Hi my name is shreshthav Bisht,I am a MERN Developer
      </Text>
      <View>
        <Image
          style={styles.imgStyles}
          source={{
            uri: "https://media-exp1.licdn.com/dms/image/C4D03AQFgRSDH0EPh8w/profile-displayphoto-shrink_200_200/0/1640673207329?e=1652313600&v=beta&t=aSbH9_autW7ULtLHA4d72vyedR8SKJrZLjVasZDvm7E",
          }}
        />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSub}>About Me</Text>
        <Text style={[styles.aboutPara, styles.paraStyles]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          adipisci suscipit qui commodi atque voluptate tempora sequi ipsum quos
          fugiat inventore praesentium nisi, modi soluta aliquid architecto.
          Officiis, quo earum.
        </Text>
      </View>
      <Text style={styles.mainHeader}>Follow me </Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.google.com/")}
        >
          <Image
            style={styles.iconStyles}
            source={require("../../assets/icons8-instagram-64.png")}
          />
          <Text>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://github.com/voidGlitch")}
        >
          <Image
            style={styles.iconStyles}
            source={require("../../assets/icons8-github-60.png")}
          />
          <Text>Github</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.google.com/")}
        >
          <Image
            style={styles.iconStyles}
            source={require("../../assets/icons8-instagram-64.png")}
          />
          <Text>Instagram</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },
  imgStyles: {
    width: 150,
    height: 150,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
    lineHeight: 30,
  },
  paraStyles: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 15,
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconStyles: {
    width: "100%",
    height: 48,
    aspectRatio: 1,
  },
});
