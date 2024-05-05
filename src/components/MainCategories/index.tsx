import categoriesGetir from "assets/categoriesGetir";
import CategoryItem from "components/CategoryItem";
import {Category} from "models";
import {useState} from "react";
import {StyleSheet, View} from "react-native";

const MainCategories = () => {
  const [categories] = useState<Category[]>(categoriesGetir);

  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};
export default MainCategories;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});
