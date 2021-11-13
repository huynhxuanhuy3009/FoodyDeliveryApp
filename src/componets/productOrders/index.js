import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Icon } from "native-base";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductOrders = (props) => {
    // const [data, setData] = useState("");
    // const [userToken, setuserToken] = useState("");
    // useEffect(() => {
    //     let userToken;
    //     async function getUserToken() {
    //         userToken = await AsyncStorage.getItem("userToken");
    //         setuserToken(userToken);
    //         getApiOrder(userToken);
    //     }
    //     getUserToken();
    //     return () => {};
    // }, []);

    // const getApiOrder = () => {
    //     const apiURL = "https://foody-store-server.herokuapp.com/orders";
    //     fetch(apiURL, {
    //         method: "GET",
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //             Authorization: `Bearer ${utoken}`,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             setData(responseJson);
    //         })
    //         .catch((e) => console.log(e));
    // };
    // const renderItem = (item) => {
    //     return (
    //         <View>
    //             <TouchableOpacity
    //                 style={{
    //                     flexDirection: "column",
    //                     justifyContent: "space-around",
    //                 }}
    //             >
    //                 <Text>At store</Text>
    //                 <Text>{item.item.fullName}</Text>
    //                 <Text style={{ ...FONTS.h4 }}>{props.fullName}</Text>
    //                 <Text>{props.phoneNumber}</Text>
    //                 <Text>{props.updatedAt}</Text>
    //                 {item.item?.products.map((pro) => {

    //                 return (
    //                     <View>
    //                         <Text>{pro.name}</Text>
    //                     </View>
    //                 );
    //             })}
    //             </TouchableOpacity>
    //         </View>
    //     );
    // };

    return (
        <View>
                <TouchableOpacity
                    onPress={() => props.onclickOrder()}
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-around",
                    }}
                >
                    <Text>At store</Text>
                    
                    <Text style={{ ...FONTS.h4 }}>{props.fullName}</Text>
                    <Text>{props.phoneNumber}</Text>
                    <Text>{props.updatedAt}</Text>
                   
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({});

export default ProductOrders;
