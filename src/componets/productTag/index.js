import React from "react";
import { View, StyleSheet, Animated, Image, Dimensions , TouchableOpacity, Text} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
import {Icon} from 'native-base'
import { imgport } from "../../config/port";

import { connect} from "react-redux";
import { buyProduct} from "./action/index";

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
                    style={{ flexDirection: "row", marginTop: SIZES.padding, justifyContent:'space-between'}}
                >
                    <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
                        {props.price
                            .toFixed()
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        đ
                    </Text>
                    <TouchableOpacity
                        onPress={() =>{ props.buyProduct(props)}}
                    >
                        <Icon
                            name="plus"
                            type="EvilIcons"
                        />
                    </TouchableOpacity>
                </View>

            </View>

            {/* })} */}
        </View>
        // </Animated.ScrollView>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyProduct: (product_current) => dispatch(buyProduct(product_current))
    };
};
const mapStateToProps = (state) => {
    return { 
        cart : state.cart.cartAr,
        totalprice : state.cart.totalprice
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTag);
