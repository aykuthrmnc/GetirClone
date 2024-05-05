import {View, Text, Dimensions, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import {HomeSvg} from "assets/svg";

const {height} = Dimensions.get("window");

const HeaderMain = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <HomeSvg />
        {/* <SvgUri
          style={styles.image}
          uri="https://cdn.getir.com/address-emojies/House.svg"
        /> */}
        <View style={styles.headerOneView}>
          <Text style={{fontWeight: "600", fontSize: 16}}>Ev</Text>
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              fontWeight: "500",
              fontSize: 12,
              color: "#6E7480",
              marginLeft: 6,
              marginRight: "auto",
            }}>
            Sancak Mahallesi M.T.A. Lojmanları
          </Text>
          <Icon name="chevron-right" size={22} color="#5D3EBD" />
        </View>
      </View>
      <View style={styles.headerTwo}>
        <Text style={{fontSize: 10, fontWeight: "bold", color: "#5D3EBD"}}>
          TVS
        </Text>
        <Text style={{fontSize: 20, fontWeight: "bold", color: "#5D3EBD"}}>
          15
          <Text style={{fontSize: 16}}>dk</Text>
        </Text>
      </View>
    </View>
  );
};
export default HeaderMain;

const styles = StyleSheet.create({
  headerMain: {
    flexDirection: "row",
    height: height * 0.064,
    backgroundColor: "#F7D102",
  },
  headerOne: {
    height: height * 0.064,
    width: "75%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: "#F3F2FD",
    borderLeftWidth: 2,
  },
  headerTwo: {
    width: "25%",
    height: height * 0.064,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
