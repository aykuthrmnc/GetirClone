import CardButton from "components/CardButton";
import DetailBox from "components/DetailBox";
import DetailProperty from "components/DetailProperty";
import ImageCarousel from "components/ImageCarousel";
import {Product} from "models";
import {SetStateAction, useEffect, useState} from "react";
import {ActivityIndicator, ScrollView, Text, View} from "react-native";

const ProductDetailsScreen = (props: {
  route: {params: {product: SetStateAction<Product | undefined>}};
}) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props?.route?.params?.product);
  }, []);

  if (!product) {
    return <ActivityIndicator color="#5D3EBD" />;
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: "#f5f5f5"}}>
        <ImageCarousel images={product.images} />
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            color: "#808B99",
            fontWeight: "600",
            fontSize: 14,
          }}>
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton />
    </View>
  );
};
export default ProductDetailsScreen;
