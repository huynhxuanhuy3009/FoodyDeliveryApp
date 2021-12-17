import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from "react-native";
import { Icon } from "native-base";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {width, height} =Dimensions.get('window');
const ProductOrders = (props) => {
    const formatCurrency = (monney) => {
        const mn = String(monney);
        return mn
            .split("")
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + ".") + prev;
            });
    };
    return (
            <View>
                <TouchableOpacity
                    onPress={() => props.onclickOrder()}
                    style={{
                        width:width*0.8,
                        flexDirection: "row",
                        justifyContent: "space-between", 
                        alignItems:'center', 
                        // backgroundColor:'red'
                    }}
                >
                    <View >
                        <Text>At store</Text>
                        <Text style={{ ...FONTS.h4 }}>{props.fullName}</Text>
                        <Text>{props.phoneNumber}</Text>
                        <Text>{props.updatedAt}</Text>
                        <Text>{props.name}</Text>
                    </View>
                    <View>
                        <Text style={{ ...FONTS.body2, color:COLORS.darkgray}}>{`${formatCurrency(props.total)}`}đ</Text>
                    </View>
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({});

export default ProductOrders;
