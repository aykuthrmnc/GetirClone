import productsGetir from "assets/productsGetir";
import CartItem from "components/CartItem";
import ProductItem from "components/ProductItem";
import useRedux from "hooks/useRedux";
import {useEffect, useState} from "react";
import {
  Dimensions,
  FlatList,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const {height} = Dimensions.get("window");

const CartScreen = ({route}: {route: unknown}) => {
  const {appSelector} = useRedux();
  const cartItems = appSelector(state => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((x, y) => x + y.product.fiyatIndirimli * y.quantity, 0),
    );
  }, [cartItems]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={cartItems}
        renderItem={({item}) => (
          <CartItem product={item.product} quantity={item?.quantity} />
        )}
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
