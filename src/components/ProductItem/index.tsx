import {useNavigation} from "@react-navigation/native";
import useRedux from "hooks/useRedux";
import {Product} from "models";
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {addToCart} from "store/cart";

const {height, width} = Dimensions.get("window");

type ProductItemProps = {
  item: Product;
};

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();
  const {dispatch} = useRedux();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", {product: item})}
      style={{
        width: width * 0.28,
        height: height * 0.24,
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: 12,
        marginLeft: 12,
        marginBottom: 0,
      }}>
      <Image
        style={{
          width: width * 0.285,
          height: width * 0.285,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View style={{flexDirection: "row", alignItems: "center", marginTop: 10}}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "bold",
            color: "#747990",
            textDecorationLine: "line-through",
          }}>
          ₺{item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}>
          ₺{item.fiyatIndirimli}
        </Text>
      </View>
      <Text
        style={{fontSize: 12, fontWeight: "600", marginTop: 5, color: "black"}}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "600",
        }}>
        {item.miktar}
      </Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(addToCart({product: item, quantity: 1}));
        }}
        style={{
          position: "absolute",
          borderWidth: 0.3,
          right: -10,
          top: -10,
          borderRadius: 5,
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
          elevation: 5,
          borderColor: "lightgrey",
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: 30,
          height: 30,
        }}>
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductItem;
