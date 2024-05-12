import useRedux from "hooks/useRedux";
import {Product} from "models";
import {View, Text, Dimensions, TouchableOpacity} from "react-native";
import {addToCart} from "store/cart";

const {height} = Dimensions.get("window");

const CardButton = ({item}: {item: Product}) => {
  const {dispatch} = useRedux();
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
        onPress={() => {
          dispatch(addToCart({product: item, quantity: 1}));
        }}
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
