import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { Icon } from "native-base";
const { width, height } = Dimensions.get("window");
const ManageAddress = ({ navigation }) => {
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
                        <Text style={{ ...FONTS.h3 }}>Manage Address</Text>
                    </View>
                </View>

                <View
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                ></View>
            </View>
        );
    }
    function renderManageAddress() {
        return (
            <View style={{ paddingHorizontal: width * 0.03 }}>
                {/* information of home */}
                <View style={styles.rowFront}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: 40, paddingLeft: 5 }}>
                            <Icon
                                name="home"
                                type="FontAwesome"
                                style={{ color: COLORS.primary }}
                            />
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <Text
                                style={{
                                    ...FONTS.h2,
                                    width: 260,
                                    color: "black",
                                }}
                            >
                                Home
                            </Text>
                            <Text style={{ ...FONTS.h4, color: "black" }}>
                                37B truong tho quan thu duc
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: width * 0.6,
                            paddingTop: height * 0.022,
                        }}
                    >
                        <TouchableOpacity>
                            <Text
                                style={{ ...FONTS.h3, color: COLORS.primary }}
                            >
                                EDIT
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                style={{ ...FONTS.h3, color: COLORS.primary }}
                            >
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* information of work */}
                <View style={styles.rowFront}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: 40, paddingLeft: 5 }}>
                            <Icon
                                name="briefcase"
                                type="Entypo"
                                style={{ color: COLORS.primary }}
                            />
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <Text
                                style={{
                                    ...FONTS.h2,
                                    width: 260,
                                    color: "black",
                                }}
                            >
                                Work
                            </Text>
                            <Text style={{ ...FONTS.h4, color: "black" }}>
                                37B truong tho quan thu duc
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: width * 0.6,
                            paddingTop: height * 0.022,
                        }}
                    >
                        <TouchableOpacity>
                            <Text
                                style={{ ...FONTS.h3, color: COLORS.primary }}
                            >
                                EDIT
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                style={{ ...FONTS.h3, color: COLORS.primary }}
                            >
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* information of other */}
                <View style={styles.rowFront}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: 40, paddingLeft: 5 }}>
                            <Icon
                                name="location"
                                type="Entypo"
                                style={{ color: COLORS.primary }}
                            />
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <Text
                                style={{
                                    ...FONTS.h2,
                                    width: 260,
                                    color: "black",
                                }}
                            >
                                Other
                            </Text>
                            <Text style={{ ...FONTS.h4, color: "black" }}>
                                37B truong tho quan thu duc
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: width * 0.6,
                            paddingTop: height * 0.022,
                        }}
                    >
                        <TouchableOpacity>
                            <Text
                                style={{ ...FONTS.h3, color: COLORS.primary }}
                            >
                                EDIT
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                style={{ ...FONTS.h3, color: COLORS.primary }}
                            >
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('User')}
                    style={[
                        styles.button,
                        {backgroundColor:"#0CC255",borderWidth:0.1},
                    ]}
                >          
                    <Text style={{...FONTS.h1,color:COLORS.white, fontSize:15}}>ADD NEW ADDRESS</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderManageAddress()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    rowFront: {
        flexDirection: "column",
        paddingLeft: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 5,
        height: height * 0.15,
        marginTop: 20,
        margin: 3,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
    },
    button:{
        marginHorizontal:width*0.05,
        height:height*0.06,
        borderRadius:5,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center'
    },
});

export default ManageAddress;
