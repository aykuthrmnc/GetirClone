import {useNavigation} from "@react-navigation/native";
import {Category} from "models";
import {Text, TouchableOpacity, Image, Dimensions} from "react-native";

const {width} = Dimensions.get("window");

const CategoryItem = ({item}: {item: Category}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CategoryDetails", {category: item});
      }}
      style={{
        width: width * 0.25,
        height: width * 0.25,
        marginTop: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Image
        style={{width: width * 0.18, height: width * 0.18, borderRadius: 8}}
        source={{
          uri: item.src,
        }}
      />
      <Text style={{fontSize: 12, color: "#616161", fontWeight: "500"}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
export default CategoryItem;
