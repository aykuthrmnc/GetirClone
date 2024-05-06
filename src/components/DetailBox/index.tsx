import {View, Text} from "react-native";

type DetailBoxPropsType = {
  price: number;
  name: string;
  quantity: string;
};

const DetailBox = ({price, name, quantity}: DetailBoxPropsType) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
      }}>
      <Text
        style={{
          color: "#5D3EBD",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 12,
        }}>
        ₺{price}
      </Text>
      <Text
        style={{
          color: "black",
          fontWeight: "700",
          fontSize: 16,
          marginTop: 12,
        }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "600",
          marginTop: 8,
          paddingBottom: 18,
        }}>
        {quantity}
      </Text>
    </View>
  );
};
export default DetailBox;
