import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Please enter all the Fields");
    } else {
      Alert.alert(`Thank you ${name}`);
      navigation.navigate("Home");
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up knowledge</Text>
      <Text style={styles.description}>you can reach us anytime</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Your name"}
          value={name}
          onChangeText={(userData) => {
            setName(userData);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"demo@miku.com"}
          value={email}
          onChangeText={(userData) => {
            setEmail(userData);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Mobile Number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"95xxx65"}
          value={phone}
          onChangeText={(userData) => {
            setPhone(userData);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How can I help You </Text>
        <TextInput
          style={[styles.inputStyle, styles.multiLinestyle]}
          placeholder={"Tell us about Yourself"}
          value={message}
          onChangeText={(userData) => {
            setMessage(userData);
          }}
          numberOfLines={5}
          multiline={true}
        />
      </View>
      {/* checkbox */}
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>I have Read all the T&C</Text>
      </View>
      {/* submit button */}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4360EB" : "grey",
          },
        ]}
        disable={!agree}
        onPress={submit}
      >
        <Text style={styles.buttonText}>Contact us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  labels: {
    fontWeight: "bold",
    color: "#7d7d7d",
    lineHeight: 25,
    paddingBottom: 5,
  },
  multiLinestyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  wrapperText: {
    marginLeft: 10,
  },
});
