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

import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const { width, height } = Dimensions.get("window");
const CheckOuts = ({ navigation }) => {
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
                        <Text style={{ ...FONTS.h3 }}>CheckOut</Text>
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

    function renderCheckOut() {
        return (
            <View
                style={{
                    marginHorizontal: width * 0.05,
                    marginVertical: height * 0.2,
                    height: 400,
                    justifyContent: "space-around",
                }}
            >
                <Text style={{ ...FONTS.h4, color: COLORS.darkgray }}>
                    Total Price
                </Text>
                <Text style={{ ...FONTS.h1, color: 'black' }}>
                    $613.75
                </Text>
                <TextInput
                    style={styles.textinput}
                    placeholder="Card Number"
                />
                <View 
                    style={{
                        flexDirection:'row', 
                        justifyContent:'space-between'
                    }}
                >
                    <TextInput
                        style={[styles.textinput, {width:width*0.4,}]}
                        placeholder="Vaild Until"
                    />
                    <TextInput
                        style={[styles.textinput, {width:width*0.4,}]}
                        placeholder="CVV"
                    />
                </View>
                <TextInput
                    style={styles.textinput}
                    placeholder="Card Holder"
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Payment03')}
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
                    <Text style={{color:'white', ...FONTS.h4}}>CHECK OUT</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderCheckOut()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    textinput:{
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 10,
    }
});

export default CheckOuts;
