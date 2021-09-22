import React from "react";
import { View, StyleSheet, Animated, Image, Dimensions , TouchableOpacity, Text} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";

import { imgport } from "../../config/port";

const { width, height } = Dimensions.get("window");
const ProductTag = (props) => {
    return (
        // <Animated.ScrollView
        //     horizontal
        //     pagingEnabled
        //     scrollEventThrottle={16}
        //     snapToAlignment="center"
        //     showsHorizontalScrollIndicator={false}
        //     onScroll={Animated.event(
        //         [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        //         { useNativeDriver: false }
        //     )}
        // >
        <View
            key={props.id}
            style={{
                marginBottom: SIZES.padding * 2,
                flexDirection: "column",
                paddingHorizontal: 10,
            }}
        >
            <View
                style={{
                    marginBottom: SIZES.padding,
                }}
            >
                <Image
                    source={{
                        uri: `${imgport}${props.imagesProduct}`,
                    }}
                    resizeMode="cover"
                    style={{
                        width: width * 0.41,
                        height: 150,
                        borderRadius: SIZES.radius,
                    }}
                />
                {/* info product */}
                <TouchableOpacity
                    onPress={()=>props.onclickProduct()}
                >
                    <Text style={{ ...FONTS.body2 }}>{props.name}</Text>
                </TouchableOpacity>

                <View
                    style={{ flexDirection: "row", marginTop: SIZES.padding }}
                >
                    <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
                        {props.price
                            .toFixed()
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        đ
                    </Text>
                </View>

            </View>

            {/* })} */}
        </View>
        // </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({});

export default ProductTag;
