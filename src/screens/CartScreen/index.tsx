import productsGetir from "assets/productsGetir";
import CartItem from "components/CartItem";
import ProductItem from "components/ProductItem";
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const {height} = Dimensions.get("window");

const CartScreen = () => {
  const totalPrice = 24.0;

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={productsGetir.slice(0, 4)}
        renderItem={({item}) => <CartItem product={item} />}
        ListFooterComponent={() => (
          <>
            <Text style={{padding: 15, fontWeight: "bold", color: "#5D3EBD"}}>
              Önerilen Ürünler
            </Text>
            <ScrollView
              style={{backgroundColor: "white"}}
              showsHorizontalScrollIndicator={false}
              bounces={true}
              horizontal={true}>
              {productsGetir.map(item => (
                <ProductItem key={item.id} item={item} />
              ))}
            </ScrollView>
          </>
        )}
      />
      <View
        style={{
          width: "100%",
          height: height * 0.12,
          backgroundColor: "#F8F8F8",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: "4%",
          // position: "absolute",
          // bottom: 0,
        }}>
        <TouchableOpacity
          style={{
            flex: 3,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5D3EBD",
            height: height * 0.06,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            marginTop: -10,
          }}>
          <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: height * 0.06,
            marginTop: -10,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}>
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 15,
            }}>
            ₺{totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default CartScreen;
