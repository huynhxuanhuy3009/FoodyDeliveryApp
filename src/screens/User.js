import React , {useState, useEffect}from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Dimensions,
    TextInput,
    Alert,
    TouchableOpacity,
    List,
    ListItem,
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Icon } from "native-base";
import { AuthContext } from "../componets/context";

const { width, height } = Dimensions.get("window");
const User = ( props ) => {
    
    const { signOut } = React.useContext(AuthContext);
    const notification = () =>
        Alert.alert(
            "Success !",
            "edit Profile?"[
                ({
                    text: "cancel",
                    style: "cancel",
                },
                {
                    text: "OK",
                    style: "destructive",
                })
            ]
        );
    
    
    function renderHeader() {
        return (
            <View 
                style={{
                    // backgroundColor:'red', 
                    height:250,
                    paddingTop:30,
                    alignItems:'center'
                }}
            >
               <Image
                    source={images.avatar_3}
                    style={{                       
                        height:height*0.2,
                        width:width*0.3,
                    }}
               />
               <TouchableOpacity
                    onPress={(()=> props.navigation.navigate("OrderHistory")) }
                    style={{
                        flexDirection:'row', 
                        alignItems:'center',
                        borderRadius:10,
                        marginTop:10, 
                        justifyContent:'space-evenly',
                        width:165, 
                        backgroundColor:"#ffa07a"
                        
                    }}
               >
                   <Text style={{...FONTS.body2}}>Order history</Text>
                   <Icon
                        name="navigate-next"
                        type="MaterialIcons"
                   />
                </TouchableOpacity>
            </View>
        );
    }

    function renderManageUser() {
        return (
            <View
                style={{
                    paddingHorizontal: width * 0.05,
                    // paddingVertical: height * 0.2,
                    // backgroundColor:'blue',
                    flex:1
                }}
            >
                <TextInput style={[styles.textinput]} placeholder="Name" />
                <TextInput style={[styles.textinput]} placeholder="Email" />
                <TextInput
                    style={[styles.textinput]}
                    placeholder="Phone Number"
                />
                <TextInput style={[styles.textinput]} placeholder="Address" />
                <TouchableOpacity
                    title="update thanh cong"
                    onPress={() => notification()}
                    style={[
                        styles.button,
                        { backgroundColor: COLORS.primary, borderWidth: 0.1 },
                    ]}
                >
                    <Text
                        style={{
                            ...FONTS.h1,
                            color: COLORS.white,
                            fontSize: 15,
                        }}
                    >
                        UPDATE
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // ĐỂ TẠM LOGOUT VÀO ĐÂY
                    onPress={() => signOut()}
                    style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginHorizontal: width * 0.27,
                        height: 40,
                        backgroundColor: COLORS.primary,
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderRadius: 20,
                    }}
                >
                    <Icon
                        name="power-off"
                        type="FontAwesome"
                        style={{ color: COLORS.lightGray2 }}
                    />
                    <Text style={{ ...FONTS.h4, color: COLORS.lightGray2 }}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* {renderEdit()} */}
            {renderHeader()}
            {renderManageUser()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    rowFront: {
        flexDirection: "row",
        paddingLeft: 20,
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 50,
        margin: 3,
        marginBottom: 15,
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    textinput: {
        width: width * 0.9,
        height: height * 0.07,
        borderRadius: 5,
        borderWidth: 0.5,
        paddingLeft: 10,
        marginTop: 25,
    },
    button: {
        width: width * 0.9,
        height: height * 0.06,
        borderRadius: 5,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default User;
