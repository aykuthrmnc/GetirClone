import {View, Text, Dimensions, TouchableOpacity} from "react-native";

const {height} = Dimensions.get("window");

const CardButton = () => {
  return (
    <View
      style={{
        width: "100%",
        height: height * 0.1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#5D39C1",
          height: height * 0.06,
          width: "90%",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text style={{fontWeight: "bold", color: "white"}}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CardButton;
