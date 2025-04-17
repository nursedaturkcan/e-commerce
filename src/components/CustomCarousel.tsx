import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Animated from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { CustomCarouselProps } from "../modals/components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../themes/colors";

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  const progress = useSharedValue<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <View>
      <Carousel
        autoPlay
        autoPlayInterval={3000}
        data={images}
        height={hp("43%")}
        loop
        pagingEnabled
        snapEnabled
        width={wp("100%")}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={(_, absoluteProgress) => {
          setActiveIndex(Math.round(absoluteProgress));
        }}
        renderItem={({ item }) => (
          <Animated.View style={{ flex: 1 }}>
            <Animated.Image
              style={[styles.image]}
              source={{ uri: item }}
              resizeMode="cover"
            />
            <View style={styles.overlay}>
              <View style={styles.overlayTextContainer}>
              </View>
            </View>
          </Animated.View>
        )}
      />

      {images &&
        (<View style={styles.paginationContainer}>
          {images?.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  overlayTextContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.PRIMARYCOLOR,
    width: 12,
    height: 12,
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});

export default CustomCarousel;
