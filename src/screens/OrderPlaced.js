import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
} from "react-native";
import { Icon } from "native-base";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const { width, height } = Dimensions.get("window");
const OrderPlaced = ({ navigation }) => {
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
                        <Text style={{ ...FONTS.h3 }}>Order Placed</Text>
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

    function renderOrderPlaced() {
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: width * 0.35,
                    height: 350,
                    justifyContent: "space-between",
                }}
            >
                <Icon
                    name="check-circle"
                    type="Feather"
                    style={{ color: "#0CC255", fontSize: 200 }}
                />
                <View style={{ alignItems: "center" }}>
                    <Text style={{ ...FONTS.h4, color: "#B47929" }}>
                        Order No.#1234122
                    </Text>
                    <Text style={{ ...FONTS.h4, color: "#B47929" }}>
                        placed successfully
                    </Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', width:width*0.4}}>
                        <Icon
                            name="mail-forward"
                            type="FontAwesome"
                            style={{ color: COLORS.primary, paddingTop: 15 }}
                        />
                        <Text
                            style={{
                                ...FONTS.h4,
                                color: COLORS.primary,
                                paddingTop: 15,
                            }}
                        >
                            TRACK ORDER
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <SafeAreaView>
            
                {renderHeader()}
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                {renderOrderPlaced()}
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default OrderPlaced;
