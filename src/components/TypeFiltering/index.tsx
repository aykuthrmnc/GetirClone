import {useState} from "react";
import {Dimensions, ScrollView, Text, TouchableOpacity} from "react-native";

const {height} = Dimensions.get("window");

const TypeBox = ({
  item,
  active,
  setCategory,
}: {
  item: string;
  active: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
          borderRadius: 6,
          height: height * 0.044,
          borderColor: "#F0EFF7",
          borderWidth: 1,
        },
        item === active && {
          backgroundColor: "#5C3EBC",
        },
      ]}
      onPress={() => {
        setCategory(item);
      }}>
      <Text
        style={[
          {fontSize: 12, color: "#7849F7", fontWeight: "600"},
          item === active && {color: "white"},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const TypeFiltering = () => {
  const [category, setCategory] = useState("Birlikte İyi Gider");

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces
      horizontal
      style={{
        width: "100%",
        backgroundColor: "white",
        height: height * 0.072,
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
      }}>
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        item => (
          <TypeBox
            key={item}
            item={item}
            active={category}
            setCategory={setCategory}
          />
        ),
      )}
    </ScrollView>
  );
};

export default TypeFiltering;
