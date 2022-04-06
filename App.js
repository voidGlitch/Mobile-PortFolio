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
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Home {...props} channelName={"VoidGlich Codes"} />}
        </Stack.Screen>
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              fontSize: 25,
            },
            headerTitle: "Contacts",
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="UserData"
          component={UserData}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              fontSize: 25,
            },
            headerTitle: "User",
          }}
        />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              fontSize: 25,
            },
            headerTitle: "Courses",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
