import {createStackNavigator} from "@react-navigation/stack";
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
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
import {useEffect, useLayoutEffect, useState} from "react";
import CartScreen from "screens/CartScreen";
import useRedux from "hooks/useRedux";
import {clearCart} from "store/cart";

const {width} = Dimensions.get("window");

const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

const Stack = createStackNavigator();

const HomeNavigator = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  route: Partial<Route<string>>;
}) => {
  const {appSelector, dispatch} = useRedux();
  const cartItems = appSelector(state => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((x, y) => x + y.product.fiyatIndirimli * y.quantity, 0),
    );
  }, [cartItems]);

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
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}>
              <Image
                source={require("~/assets/cart.png")}
                style={{width: 23, height: 23, marginLeft: 6, marginRight: 3}}
              />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  backgroundColor: "#F3EFFE",
                }}>
                <Text
                  style={{color: "#5D3EBD", fontWeight: "bold", fontSize: 12}}>
                  ₺{totalPrice?.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
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
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "#5C3EBC"},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 12}}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 15, color: "white"}}>
              Sepetim
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(clearCart())}
              style={{paddingRight: 12}}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
