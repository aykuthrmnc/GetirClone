import {createStackNavigator} from "@react-navigation/stack";
import {Image, Text, TouchableOpacity} from "react-native";
import CategoryFilterScreen from "screens/CategoryFilterScreen";
import HomeScreen from "screens/HomeScreen";
import ProductDetailsScreen from "screens/ProductDetailsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import {
  NavigationProp,
  Route,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import {useLayoutEffect} from "react";

const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

const Stack = createStackNavigator();

const HomeNavigator = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  route: Partial<Route<string>>;
}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName!)) {
      navigation.setOptions({tabBarStyle: {display: "none"}});
    } else {
      navigation.setOptions({tabBarStyle: {display: "true"}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "#5C3EBC"},
          headerTitle: () => (
            <Image
              source={require("assets/getirlogo.png")}
              style={{width: 70, height: 30}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "#5C3EBC"},
          headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 15, color: "white"}}>
              Ürünler
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "#5C3EBC"},
          headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 15, color: "white"}}>
              Ürün Detayı
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 12}}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingRight: 12}}>
              <Foundation name="heart" size={24} color="#32177A" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
