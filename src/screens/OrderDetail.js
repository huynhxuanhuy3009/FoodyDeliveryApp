import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, SafeAreaView,TouchableOpacity, Image, Dimensions, FlatList} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductDetail from "../componets/productDetail/index";

const {width, height} = Dimensions.get("window");
const line = () => {
    return (
        <View style={{
                backgroundColor: COLORS.lightGray3,
                height:5,
                marginTop:10,
                marginBottom:10
            }}>
        </View>
    );
}
const OrderDetail = (props) => {
    const [data, setData] = useState('');
    const [userToken, setUserToken] = useState('')
    useEffect(() => {
        let userToken;
        async function getUserToken() { 
            userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            getApiOrder(userToken);
        }
        getUserToken()
        return () => {}
    }, [])

    const getApiOrder = (utoken) => {
        const apiURL = "https://foody-store-server.herokuapp.com/orders";
        fetch(apiURL, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${utoken}`,
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson)
            })
            .catch((e) => console.log(e))
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: "row", height: 50 }}>
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
                        <Text style={{ ...FONTS.h3}}>Order Status</Text>
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
    };
    const hoantat = () => {
        return(
            <View style={{marginHorizontal: width * 0.05}}>
                <Text style={{ ...FONTS.h3,marginTop:20, }}>Completed</Text>
                <TouchableOpacity 
                    style={{
                        marginTop:20,
                        height: 40,
                        backgroundColor: COLORS.primary,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                    }}
                >
                    <Text style={{...FONTS.h4,color:COLORS.white}}>Re-Order</Text>
                </TouchableOpacity>
            </View>
        );
    };
    const infomation = () => {
        const renderItem = (infoItem) => {
            console.log(infoItem)
            return(
                <View>
                    <ProductDetail
                        fullName = {infoItem.item.fullName}
                        phoneNumber = {infoItem.item.phoneNumber}
                        address = {infoItem.item.address}
                        status = {infoItem.item.status}
                        _id = {infoItem.item.id}
                    />
                </View>
                
            );
        }
        return (
            <View style={{marginHorizontal: width * 0.05}}>
                <Text style={{ ...FONTS.h3}}>Information Order</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </View>

        );
    }
    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {hoantat()}
            {line()}
            {infomation()}
        </SafeAreaView>
    );
        
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
});

export default OrderDetail;
