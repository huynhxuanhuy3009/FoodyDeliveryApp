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
    TextInput,
    ScrollView,
} from "react-native";
import { Icon, List, ListItem } from "native-base";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import ProductCheckout from "../componets/productCheckout/index";
const { width, height } = Dimensions.get("window");
const Payment01 = (props) => {
    // const [fullName, setFullName] = useState(initialState)
    const navigation = useNavigation();
    const formatCurrency = (monney) => {
        const mn = String(monney);
        return mn
            .split("")
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + ".") + prev;
            });
    };
    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: 60,
                    borderBottomWidth: 0.3,
                    paddingBottom: 10,
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.goBack()}
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
                        <Text style={{ ...FONTS.h3 }}>Payment</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                ></TouchableOpacity>
            </View>
        );
    }
   
    function renderProductCheck(item) {
        return (
            
            // style={styles.rowFront}
            <ScrollView 
                style={[styles.rowFront], {height:100}}
            >
                <ProductCheckout 
                    name={item.name} 
                    price={item.price} 
                    quantity={item.quantity}
                    imagesProduct={item.imagesProduct}
                />
            </ScrollView>    
        );
    }
    function renderBody() {
        return (
            <View style={{ paddingHorizontal: width * 0.05 }}>

                {/* Delivery to */}
                <View
                    style={[
                        styles.rowFront,
                        { justifyContent: "space-evenly", height: 250 },
                    ]}
                >
                    <Text style={{ ...FONTS.h3 }}>DELIVERY TO</Text>
                    <TextInput
                        placeholder="Full name"
                        style={{
                            borderWidth: 0.5,
                            borderRadius: 5,
                            paddingVertical: 7,
                            paddingHorizontal: 10,
                        }}
                    />
                    <TextInput
                        placeholder="Phone number"
                        keyboardType={"phone-pad"}
                        style={{
                            borderWidth: 0.5,
                            borderRadius: 5,
                            paddingVertical: 7,
                            paddingHorizontal: 10,
                        }}
                    />
                    <TextInput
                        placeholder="Address..."
                        style={{
                            borderWidth: 0.5,
                            borderRadius: 5,
                            paddingVertical: 7,
                            paddingHorizontal: 10,
                        }}
                    />
                </View>
                <View   style={[
                        styles.rowFront,
                        { justifyContent: "space-evenly", height: 100 },
                    ]}>
                     <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            // paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 1,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1,
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>0 Items in Cart</Text>
                        <Text style={{ ...FONTS.h3 }}>{`${formatCurrency(props.totalprice)}`}đ</Text>
                    </View>
                   
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: SIZES.padding * 1,
                            paddingHorizontal: SIZES.padding * 1,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1,
                        }}
                    >
                        <Text style={{ ...FONTS.h1 }}>Total</Text>
                        <Text style={{ ...FONTS.h1 }}>{`${formatCurrency(props.totalprice)}`}đ</Text>
                    </View>
                </View>
            </View>
        );
    }
    function renderFooter() {
        return (
            <View style={[styles.rowFront, { height: 60 }]}>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate("Payment02")}
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
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {/* {renderStepPayHeader()} */}
            <ScrollView  
                // style={[styles.rowFront], {height:250,marginTop:10}}
            >
                {props.cart.map((item) => renderProductCheck(item))}
            </ScrollView>
            
            {renderBody()}
            {renderFooter()}
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
        height: 220,
        margin: 3,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 15,
        // justifyContent: "space-around",
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    style_button: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.padding * 2,
        paddingVertical: SIZES.padding * 2,
        borderWidth: 1,
    },
});

const mapStatesToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        totalprice: state.cart.totalprice,
    };
};
export default connect(mapStatesToProps)(Payment01);
