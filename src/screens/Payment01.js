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
    TextInput,
    ScrollView,
} from "react-native";
import { Icon, List, ListItem } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import ProductCheckout from "../componets/productCheckout/index";
const { width, height } = Dimensions.get("window");
const Payment01 = (props) => {
    const [valueName, setValueName] = useState("")
    const [valueAddress, setValueAddress] = useState("")

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

    

    const postApiOrder = (utoken,phoneNumber,email, productList, address, status, paymentType) => {
        console.log('valueAddress', valueAddress)
        let userToken;
      
        userToken = AsyncStorage.getItem("userToken")       
            .then((res) => {
                const apiURL = "https://foody-store-server.herokuapp.com/orders"
                fetch (apiURL, {
                method:"POST",
                headers: {
                    Authorization:`Bearer ${res}`
                },
                body:JSON.stringify({
                    // phoneNumber:phoneNumber,
                    // email :email,
                    // products: [...productList], 
                    address:valueAddress, 
                    // status:status,
                    paymentType:"Paypal"
                })
                .then ((response) => response.json())
                .then ((responseJson => {
                    setValueAddress(valueAddress)
                }))
                .catch((e) => {console.log(e)})
            })  
        });    
    }   
    const handleContinue = () => {
        postApiOrder();
        navigation.navigate("Paypal");
    }
 
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
    
    function renderTypePro() {
        return(
            <View style={[styles.rowFront, { height: 50, backgroundColor:COLORS.lightGray2 }]}>
                 <Text style={{ ...FONTS.h3 , fontStyle: 'italic'}}>Types of products : {props.cart.length} </Text>
            </View>
        );
    }
    function renderProductCheck(item, index) {
        return ( 
            // style={styles.rowFront}
            <ScrollView 
                
                nestedScrollEnabled={true}
                key={item.id}
                style={[styles.rowFront], {height:100}}
            >
                <ProductCheckout                  
                    name={item.name} 
                    price={item.price} 
                    quantity={item.quantity}
                    imagesProduct={item.image}
                />
            </ScrollView>    
        );
    }
    function renderBody() {
        console.log(">>name", valueAddress)
        return (
            <View style={{ paddingHorizontal: width * 0.05 , }}>

                {/* Delivery to */}
                <View
                    style={[
                        styles.rowFront,
                        { justifyContent: "space-evenly", height: 250, backgroundColor:COLORS.lightGray2 },
                    ]}
                >
                    <Text style={{ ...FONTS.h3 }}>DELIVERY TO</Text>
                    <TextInput
                        placeholder="Full name"
                        value={valueName}
                        onChangeText={(val) => {setValueName(val)}}
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
                        value={valueAddress}
                        onChangeText={(val) => {setValueAddress(val)}}
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
                        { justifyContent: "space-evenly", height: 75},
                    ]}>
                   
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: SIZES.padding * 1,
                            paddingHorizontal: SIZES.padding * 1,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1,
                            backgroundColor:COLORS.lightGray2
                        }}
                    >
                        <Text style={{ ...FONTS.h2 }}>Total</Text>
                        <Text style={{ ...FONTS.h2 }}>{`${formatCurrency(props.totalprice)}`}đ</Text>
                    </View>
                </View>
            </View>
        );
    }
    function renderFooter() {
        return (
            <View style={[styles.rowFront, { height: 60, backgroundColor:"#ffe4e1",}]}>
                
                <TouchableOpacity
                    onPress={() => handleContinue()}
                    style={{
                        marginHorizontal: width * 0.15,
                        height: 40,
                        backgroundColor:COLORS.primary,
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
            {renderTypePro()}
            <ScrollView         
                nestedScrollEnabled={true}
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
        // backgroundColor: COLORS.lightGray2,
        backgroundColor:"#ffe4e1",
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
