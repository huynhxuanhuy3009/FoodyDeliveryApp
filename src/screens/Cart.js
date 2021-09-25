import React, { useState } from "react";
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
} from "react-native";
import { Icon, ListItem, Tab } from "native-base";
import tabs from "../navigation/tabs";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import Tabs from "../navigation/tabs";

import {
    deleteProduct, 
    increaseProduct, 
    decreaseProduct,
} from '../componets/productTag/action/index'
import ProductCart from "../componets/productCart/index";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");
const Cart = (props,navigation) => {
   

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
                    <Image
                        source={icons.basket}
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

    //body cart
    function renderItemsCart(item) {
        return(           
            <ProductCart
                name ={item.name}
                price = {item.price}
                quantity={item.quantity}
                imagesProduct = {item.imagesProduct} 
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
                        marginBottom:60,
                        paddingHorizontal: width * 0.05,
                        paddingVertical: height * 0.035,
                        height: 160,
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
                        <Text style={{ ...FONTS.h4, color:'black' }}>
                            Subtotal
                        </Text>
                        <Text style={{ ...FONTS.h4,  color:'black' ,paddingVertical:5}}>
                            Discount
                        </Text>
                        <Text style={{ ...FONTS.h2,  color:'black'  }}>
                            Total
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                ...FONTS.h4,
                                color:'black',
                                alignSelf: "flex-end",
                            }}
                        >
                            $18000
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                color:'black',
                                alignSelf: "flex-end",
                                paddingVertical:5
                            }}
                        >
                            10%
                        </Text>
                        <Text style={{ ...FONTS.h2, color:'black', }}>
                            {`${props.totalprice}`}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Payment01')}
                    style={{
                        marginHorizontal:width*0.15,
                        height:40,
                        backgroundColor:'#0CC255',
                        justifyContent:'center',
                        alignItems:'center', 
                        borderWidth:0.5,
                        borderRadius:20,
                    }}
                >
                    <Text style={{color:'white', ...FONTS.h4}}>PROCEED TO PAY</Text>
                </TouchableOpacity>
            </View>
        );
    }
    function renderTabs() {
        return(
            <Tabs/>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeaderCart()}
            {props.cart.map((prod) => renderItemsCart(prod))}
            {renderTotalCart()}
            {/* {renderTabs()} */}
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
        cart : state.cart.cartAr, 
        totalprice: state.cart.totalprice,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        decreaseProduct : (product_current) => dispatch(decreaseProduct(product_current)),
        increaseProduct : (product_current) => dispatch(increaseProduct(product_current)),
        deleteProduct : (product_current) => dispatch(deleteProduct(product_current)),
    }
}


export default connect (mapStatesToProps, mapDispatchToProps)(Cart);
