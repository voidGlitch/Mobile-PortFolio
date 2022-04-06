import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Course")}
      >
        <Image
          style={styles.iconStyles}
          source={{
            uri: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-course-resume-flaticons-flat-flat-icons.png",
          }}
        />
        <Text>Course</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("UserData")}
      >
        <Image
          style={styles.iconStyles}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/user.png",
          }}
        />
        <Text>UserData</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          style={styles.iconStyles}
          source={{
            uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-contact-100-most-used-icons-flaticons-lineal-color-flat-icons.png",
          }}
        />
        <Text>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.iconStyles}
          source={{
            uri: "https://img.icons8.com/color-glass/96/000000/about.png",
          }}
        />
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonStyle: {},
  iconStyles: {
    width: "100%",
    aspectRatio: 1,
    height: 50,
  },
});
