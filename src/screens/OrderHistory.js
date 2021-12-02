import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
    List
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import ProductOrders from "../componets/productOrders/index";
import { ListItem } from "native-base";
import { connect } from "react-redux";


const { height, width } = Dimensions.get("window");
const OrderHistory = (props) => {
    const navigation = useNavigation();
    const [userToken, setuserToken] = useState("");
    const [data, setData] = useState("");
    // const getInfoOrder = () => {
    //     let userToken ;
    //     async function getUserToken () {
    //         userToken = await AsyncStorage.getItem("userToken")
    //         setuserToken(userToken)
    //         getApiOrder(userToken)
    //     }
    //     getUserToken()

    // }
    useEffect(() => {
        let userToken;
        async function getUserToken() {
            userToken = await AsyncStorage.getItem("userToken");
            setuserToken(userToken);
            getApiOrder(userToken);
        }
        getUserToken();
        return () => {};
    }, []);

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
                console.log(">>respon",responseJson)
                setData(responseJson);
            })
            .catch((e) => console.log(e));
    };
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
                        <Text style={{ ...FONTS.h3 }}>My orders</Text>
                    </View>
                </View>

                <TouchableOpacity
                    // onPress={() => navigation.navigate('Cart')}
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                ></TouchableOpacity>
            </View>
        );
    }
    function body(){
        return (
            <View style={{ paddingHorizontal: width * 0.05 ,marginTop:25}}>
                <Text style={{ ...FONTS.h3 }}>The order has been completed</Text>
            </View>
        )
        
    }
    function renderListOrders() {
        const renderItem = (itemPro) => {
            console.log(itemPro);
            console.log(">>item",itemPro.item?.products.map((pro) =>{
                console.log(pro.name)
            }))
            return (
                <View>                     
                        <ListItem>                                                       
                                <ProductOrders
                                    onclickOrder={()=>onclickOrder(itemPro)}
                                    fullName={itemPro.item.fullName}
                                    phoneNumber={itemPro.item.phoneNumber}
                                    updatedAt={itemPro.item.updatedAt}
                                    name = {itemPro.item.products[0].name}
                                />                           
                        </ListItem>                              
                </View>
            );
        };

        const onclickOrder = (listOrder) => props.navigation.navigate("OrderDetail",listOrder )
        return (
            <ScrollView>
                <View style={{ paddingHorizontal: width * 0.025 }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                    />
                </View>
            </ScrollView>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {body()}
            <View  style={{marginTop:25}}>
                {/* {props.cart.map((item) => renderListOrders(item))} */}
                {renderListOrders()}
            </View>
           
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffe4e1",
    },
});

export default OrderHistory;
// const mapStatesToProps = (state) => {
//     return ({
//         cart:state.cart.cartAr,
//         totalprice: state.cart.totalprice,
//     });
// }
// export default connect(mapStatesToProps)(OrderHistory);
