import {useRef, useState} from "react";
import {Dimensions, FlatList, Image, StyleSheet, View} from "react-native";

const {width, height} = Dimensions.get("window");

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef((viewableItems: {viewableItems: string | any[]}) => {
    if (viewableItems.viewableItems.length) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        height: height * 0.25,
        paddingTop: 15,
      }}>
      <FlatList
        data={images}
        style={{
          width: width * 0.5,
          height: height * 0.18,
        }}
        renderItem={item => (
          <Image
            source={{uri: item.item}}
            style={{
              width: width * 0.5,
              height: height * 0.21,
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        snapToAlignment="center"
        decelerationRate="fast"
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
      <View>
        <View style={styles.dots}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === activeIndex ? "#5D3EBD" : "#F2F0FD",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
export default ImageCarousel;
const styles = StyleSheet.create({
  dots: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    marginVertical: 2,
    marginHorizontal: 5,
  },
});
