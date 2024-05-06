import {useState} from "react";
import {View, Text} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const DetailProperty = () => {
  const [details] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({detail, index}: {detail: string; index: number}) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: details.length - 1 === index ? 0 : 0.3,
          borderBottomColor: "lightgray",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Text
          style={{
            color: index ? "#687482" : "#424242",
            fontSize: index ? 13 : 10,
            fontWeight: index ? "500" : "400",
          }}>
          {detail}
        </Text>
        {index !== 0 && (
          <Feather name="chevron-down" size={24} color="#9F9F9F" />
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}>
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
};
export default DetailProperty;
