import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "navigators/RootNavigator";
import "react-native-gesture-handler";
import {Provider} from "react-redux";
import store from "store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // marginTop: "15%",
//   },
// });
