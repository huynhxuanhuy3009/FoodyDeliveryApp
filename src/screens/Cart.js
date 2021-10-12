import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image,
    NativeModules,
    ScrollView,
} from "react-native";
import { Button, Icon, ListItem, Tab } from "native-base";
import tabs from "../navigation/tabs";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import Tabs from "../navigation/tabs";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    deleteProduct,
    increaseProduct,
    decreaseProduct,
    updateProduct,
    getCart,
} from "../componets/productTag/action/index";
import ProductCart from "../componets/productCart/index";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");
const Cart = (props) => {
    const navigation = useNavigation();
    const [usertoken, setUsertoken] = useState("");
    const [postCart, setPostcart] = useState("");
    const [update, setUpdate] = useState("");
    const [cartGet, setcartGet] = useState({});
    const formatCurrency = (monney) => {
        const mn = String(monney);
        return mn
            .split("")
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + ".") + prev;
            });
    };
    useEffect(() => {
        // apiCarts()
        let userToken;
        async function getuserToken() {
            userToken = await AsyncStorage.getItem("userToken");
            setUsertoken(userToken);
            apiCarts(userToken);
        }
        getuserToken();
       
        return () => {};
    }, []);
    const apiCarts = (utoken) => {
        const apiURL = "https://foody-store-server.herokuapp.com/carts";
        fetch(apiURL, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${utoken}`,
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setcartGet(responseJson[0])
                console.log(">>totalAmount", responseJson[0].totalAmount);
                console.log(">>IDcart", responseJson[0].id);
            })
            .catch((error) => {
                consolr.log(error);
            });
    };
    const apiPostCarts = (utoken, totalAmount, productID, quantity, amount) => {
        const apiURL = "https://foody-store-server.herokuapp.com/carts";
        fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${utoken}`,
            },
            body: JSON.stringify({
                totalAmount: totalAmount,
                products: [
                    {
                        productID: productID,
                        quantity: quantity,
                        amount: amount,
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.totalAmount);
            });
    };
    const apiUpdateCarts = (
        utoken,
        totalAmount,
        productID,
        quantity,
        amount
    ) => {
        const apiURL =
            "https://foody-store-server.herokuapp.com/carts/61639b0be08fdd0016051da3";
        fetch(apiURL, {
            method: "PUT",
            body: JSON.stringify({
                totalAmount: totalAmount,
                products: [
                    {
                        productID: productID,
                        quantity: quantity,
                        amount: amount,
                    },
                ],
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${utoken}`,
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.totalAmount);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const updateCart = () => {
        let userToken;
        async function updatecart() {
            userToken = await AsyncStorage.getItem("userToken");
            setUsertoken(userToken);
            apiUpdateCarts(userToken);
        }
        updatecart();
    };
    // header của cart
    function renderHeaderCart() {
        return (
            <View style={{ flexDirection: "row", height: 50 }}>
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

                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            width: "70%",
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: SIZES.radius,
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Cart</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                >
                    <Icon
                        name="delete"
                        type="AntDesign"
                        style={{
                            width: 30,
                            height: 28,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function giohangtrong() {
        return (
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        paddingTop: 50,
                    }}
                >
                    <Image
                        source={require("../../src/assets/images/nope_basket.jpg")}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
                <Text
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "black",
                        paddingBottom: 10,
                    }}
                >
                    {"Cart is empty"}
                </Text>

                <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "grey",
                            width: "80%",
                            paddingBottom: 30,
                        }}
                    >
                        {"You have not added any products to your cart yet"}
                    </Text>
                </View>
            </View>
        );
    }
    //body cart
    function renderItemsCart(item) {
        return (
            <ProductCart
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                imagesProduct={item.imagesProduct}
                ondecreaseProduct={() => props.decreaseProduct(item)}
                onincreaseProduct={() => props.increaseProduct(item)}
                ondeleteProduct={() => props.deleteProduct(item)}
            />
        );
    }

    //total cart
    function renderTotalCart() {
        return (
            <View
                style={[
                    styles.rowFront,
                    {
                        marginTop: 10,
                        marginBottom: 60,
                        paddingHorizontal: width * 0.05,
                        paddingVertical: height * 0.035,
                        height: height * 0.2,
                        justifyContent: "space-between",
                    },
                ]}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <Text style={{ ...FONTS.h2, color: "black" }}>
                            Total
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...FONTS.h2, color: "black" }}>
                            {`${formatCurrency(props.totalprice)}`}đ
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={updateCart}
                    style={{
                        marginHorizontal: width * 0.15,
                        height: 40,
                        backgroundColor: "#0CC255",
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderRadius: 20,
                    }}
                >
                    {/* <Text>{responseJson.totalAmount}</Text> */}
                    <Text style={{ color: "white", ...FONTS.h4 }}>
                        confirm cart
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Payment01")}
                    style={{
                        marginHorizontal: width * 0.15,
                        height: 40,
                        backgroundColor: "#0CC255",
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderRadius: 20,
                    }}
                >
                    <Text style={{ color: "white", ...FONTS.h4 }}>
                        PROCEED TO PAY
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => props.getCart(cartGet)}>
                <Text>Get cart</Text>
            </TouchableOpacity>

            {renderHeaderCart()}
            {props.cart.length === 0 ? (
                <View>{giohangtrong()}</View>
            ) : (
                <View>
                    <ScrollView style={{ height: height * 0.6 }}>
                        {props.cart.map((prod) => renderItemsCart(prod))}
                    </ScrollView>
                    <View style={{ height: height * 0.3 }}>
                        {renderTotalCart()}
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    rowFront: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 110,
        margin: 3,
        marginBottom: 15,
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});

const mapStatesToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        totalprice: state.cart.totalprice,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        decreaseProduct: (product_current) =>
            dispatch(decreaseProduct(product_current)),
        increaseProduct: (product_current) =>
            dispatch(increaseProduct(product_current)),
        deleteProduct: (product_current) =>
            dispatch(deleteProduct(product_current)),
        updateProduct: (product_current) =>
            dispatch(updateProduct(product_current)),
        getCart: (usertoken) => dispatch(getCart(usertoken)),
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Cart);
