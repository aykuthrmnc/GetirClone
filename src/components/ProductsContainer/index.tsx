import productsGetir from "assets/productsGetir";
import ProductItem from "components/ProductItem";
import {StyleSheet, Text, View} from "react-native";

const ProductsContainer = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          paddingVertical: 10,
        }}>
        {productsGetir.slice(0, 2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={{color: "gray", fontWeight: "bold", padding: 14}}>
        Çubuk
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          flexWrap: "wrap",
          flex: 1,
          paddingVertical: 10,
        }}>
        {productsGetir.slice(2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductsContainer;

const styles = StyleSheet.create({});
