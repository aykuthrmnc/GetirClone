import BannerCarousel from "components/BannerCarousel";
import HeaderMain from "components/HeaderMain";
import MainCategories from "components/MainCategories";
import {Dimensions, ScrollView, StyleSheet} from "react-native";

const {height} = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: "#f5f5f5"}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};
export default HomeScreen;

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
