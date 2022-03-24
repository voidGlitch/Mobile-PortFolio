import { StyleSheet, View } from "react-native";
import Home from "./src/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/Screens/About";
import Contact from "./src/Screens/Contact";
import Course from "./src/Screens/Course";
import UserData from "./src/Screens/UserData";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="home" component={Home} /> */}
        <Stack.Screen name="Home">
          {(props) => <Home {...props} channelName={"VoidGlich Codes"} />}
        </Stack.Screen>
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="UserData" component={UserData} />
        <Stack.Screen name="Course" component={Course} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
