import {Product} from "models";
import {View, Text, Image, Dimensions, TouchableOpacity} from "react-native";

type CartItemProps = {
  product: Product;
};

const {width, height} = Dimensions.get("window");

const CartItem = ({product}: CartItemProps) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <View
        style={{
          width: width * 0.92,
          height: height * 0.13,
          marginHorizontal: width * 0.04,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderBottomWidth: 0.4,
          borderBottomColor: "lightgrey",
        }}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
          <Image
            source={{uri: product.image}}
            style={{
              width: height * 0.09,
              height: height * 0.09,
              borderRadius: 8,
              borderWidth: 0.4,
              borderColor: "lightgray",
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 13,
                maxWidth: width * 0.44,
                color: "black",
              }}>
              {product.name}
            </Text>
            <Text
              style={{
                color: "#848897",
                fontWeight: "600",
                fontSize: 12,
                marginTop: 3,
              }}>
              {product.miktar}
            </Text>
            <Text
              style={{
                color: "#5D3EBD",
                fontWeight: "bold",
                fontSize: 14,
                marginTop: 6,
              }}>
              ₺{product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: width * 0.22,
            height: height * 0.04,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "lightgrey",
            // - - - - - - - - - - - - -
            shadowOpacity: 0.4,
            shadowColor: "gray",
          }}>
          <TouchableOpacity style={{flex: 1, alignItems: "center"}}>
            <Text style={{color: "#5D3EBD", fontSize: 16, fontWeight: "bold"}}>
              -
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              backgroundColor: "#5D3EBD",
              height: height * 0.04,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{color: "white", fontSize: 12, fontWeight: "bold"}}>
              1
            </Text>
          </View>
          <TouchableOpacity style={{flex: 1, alignItems: "center"}}>
            <Text style={{color: "#5D3EBD", fontSize: 16, fontWeight: "bold"}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CartItem;
