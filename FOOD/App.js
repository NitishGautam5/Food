import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Body from "./src/componet/Body";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./src/componet/Details";
import Home from "./src/componet/Home";
import Search from "./src/componet/Search";
const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <StatusBar hidden={true} backgroundColor="yellow"/>
      <View className="flex-1 mt-9">
        <Stack.Navigator>
          <Stack.Screen name="Home"   component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Search Results" component={Search} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
