import CategoryFiltering from "components/CategoryFiltering";
import ProductsContainer from "components/ProductsContainer";
import TypeFiltering from "components/TypeFiltering";
import {Category} from "models";
import {useState} from "react";
import {ScrollView} from "react-native";

const CategoryFilterScreen = (props: any) => {
  const [category] = useState<Category>(props.route.params.category);
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
};

export default CategoryFilterScreen;
