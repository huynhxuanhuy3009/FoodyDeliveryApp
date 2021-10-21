import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    Animated,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { isIphoneX } from "react-native-iphone-x-helper";
import { icons, COLORS, SIZES, FONTS } from "../constants";

import {connect} from 'react-redux'
import { buyProduct } from "../componets/productTag/action";
import { imgport } from "../config/port";

const { width, height } = Dimensions.get("window");
const Restaurant = (props) => {
    const scrollX = new Animated.Value(0);
    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);

    //code H
    const [data, setData] = useState([]);
    const [restaurants01, setRestaurants01] = React.useState(null);
    const productID = props.route.params._id;
    const dataProduct = { ...props.route.params, id: productID };

    // const {name, price, imagesProduct} = props.route.params
    React.useEffect(() => {
        let { item, currentLocation } = props.route.params;
        // console.log(">>`route.params`",`${props.route.params.image.url}`)
        // console.log(">>naem" ,`${props.route.params.name}`)
        setRestaurants01(item);
        // setCurrentLocation(currentLocation)
    });

    useEffect(() => {
        getListProduct();
        return () => {};
    }, []);

    const getListProduct = () => {
        const apiURL = "https://foody-store-server.herokuapp.com/categories";
        fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    
    // header
    function renderHeader() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                    onPress={() => props.navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3,
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    // body
    function renderFoodInfo01() {
        return (
            <View style={{ alignItems: "center" }}>
                <View style={{ height: SIZES.height * 0.35 }}>
                    {/* food image */}
                    <Image
                        source={{
                            uri: `${imgport}${props.route.params.image.url}`,
                        }}
                        resizeMode="cover"
                        style={{
                            width: SIZES.width,
                            height: "100%",
                        }}
                    />
                    {/* Quantity */}
                    <View
                        style={{
                            position: "absolute",
                            bottom: -20,
                            width: SIZES.width,
                            height: 50,
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                    >
                        {/* <TouchableOpacity
                            style={{
                                width: 50,
                                backgroundColor: COLORS.white,
                                alignItems: "center",
                                justifyContent: "center",
                                borderTopLeftRadius: 25,
                                borderBottomLeftRadius: 25,
                            }}
                        >
                            <Text style={{ ...FONTS.body1 }}>-</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                width: 50,
                                backgroundColor: COLORS.white,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ ...FONTS.h2 }}></Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                width: 50,
                                backgroundColor: COLORS.white,
                                alignItems: "center",
                                justifyContent: "center",
                                borderTopRightRadius: 25,
                                borderBottomRightRadius: 25,
                            }}
                        >
                            <Text style={{ ...FONTS.body1 }}>+</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
                {/* Name & Description */}
                <View
                    style={{
                        width: SIZES.width,
                        alignItems: "center",
                        marginTop: 15,
                        paddingHorizontal: SIZES.padding * 2,
                    }}
                >
                    <Text
                        style={{
                            marginVertical: 10,
                            textAlign: "center",
                            ...FONTS.h2,
                        }}
                    >
                        {props.route.params.name} -{" "}
                        {props.route.params.price
                            .toFixed()
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        đ
                    </Text>
                    {/* <Text style={{ ...FONTS.body3 }}>
                        {itemPro.description}
                    </Text> */}
                </View>
                {/* Calories */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                    }}
                >
                    <Image
                        source={icons.fire}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10,
                        }}
                    />

                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.darygray,
                        }}
                    ></Text>
                </View>
            </View>
        );
    }

    //footer
    function renderOrder() {
        return (
            <View>
                {/* {renderDots()} */}
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    }}
                >

                    {/* Order Button */}
                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: "center",
                                borderRadius: SIZES.radius,
                            }}
                            onPress={() =>props.buyProduct(dataProduct)}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                                Add To Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>    
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo01(restaurants01)}
            {renderOrder()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
});

const mapStateToProps = (state) => {
    return{
        cart : state.cart.cartAr,
        totalprice:state.cart.totalprice
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        buyProduct : (product_current) => dispatch(buyProduct(product_current))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
