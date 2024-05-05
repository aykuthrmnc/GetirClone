import categoriesGetir from "assets/categoriesGetir";
import {Category} from "models";
import {useState} from "react";
import {Dimensions, ScrollView, Text, View} from "react-native";

const {height} = Dimensions.get("window");

const CategoryBox = ({item, active}: {item: Category; active: Category}) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: "row",
          alignItems: "center",
        },
        item.name === active.name && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}>
      <Text style={{fontSize: 14, color: "white", fontWeight: "600"}}>
        {item.name}
      </Text>
    </View>
  );
};

const CategoryFiltering = ({category}: {category: Category}) => {
  const [categories] = useState<Category[]>(categoriesGetir);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces
      horizontal
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}>
      {categories.map(item => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;
