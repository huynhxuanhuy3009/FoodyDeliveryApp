import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity,List, ListItem} from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

import {Icon} from 'native-base';
import { AuthContext } from "../componets/context";

const {width, height} = Dimensions.get('window');
const User = () => {
    // dđể tạm signout
    const {signOut} = React.useContext(AuthContext);
    function renderEdit() {
        return(
            <View 
                style={{
                    marginHorizontal:width*0.1,
                    marginVertical:height*0.05,
                    height:250, 
                    justifyContent:'space-evenly',
                    alignItems:'center', 
                  
                }}
            >
                <Image
                    source={images.avatar_2}
                    style={{
                        width:width*0.25,
                        height:height*0.15, 
                        borderRadius: 25
                    }}
                />
                <Text style={{ ...FONTS.h4, color: "#B47929" }}>Your profile is 80% completed.</Text>
                <TouchableOpacity
                    style={{
                        width:180,
                        flexDirection:'row', 
                        alignItems:'center', 
                        justifyContent:'space-around', 
                       
                    }}
                >
                    <Icon
                        name="user-edit"
                        type="FontAwesome5"
                    />
                    <Text style={{ ...FONTS.h4, color:'black' }}>EDIT PROFILE</Text>
                </TouchableOpacity>
            </View>
        );
    }
    function renderManageUser() {
        return(
            <View
                style={{
                    paddingHorizontal:width*0.05
                }}
            >
                <TouchableOpacity style={styles.rowFront}>
                    <View style={{width:40,paddingLeft:5}}>
                        <Icon
                            name="home"
                            type="FontAwesome"
                            style={{color:COLORS.primary}}
                        />
                    </View>
                    <Text style={{...FONTS.body2,width:260, paddingLeft:20, }}>
                        Manage Address
                    </Text>
                    <View style={{width:60, }}>
                        <Icon
                            name="navigate-next"
                            type="MaterialIcons"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowFront}>
                    <View style={{width:40,paddingLeft:5}}>
                        <Icon
                            name="heart-circle"
                            type="Ionicons"
                            style={{color:COLORS.primary}}
                        />
                    </View>
                    <Text style={{...FONTS.body2,width:260, paddingLeft:20, }}>
                        Favorites
                    </Text>
                    <View style={{width:60, }}>
                        <Icon
                            name="navigate-next"
                            type="MaterialIcons"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowFront}>
                    <View style={{width:40,paddingLeft:5}}>
                        <Icon
                            name="player-settings"
                            type="Fontisto"
                            style={{color:COLORS.primary}}
                        />
                    </View>
                    <Text style={{...FONTS.body2,width:260, paddingLeft:20, }}>
                        Setting
                    </Text>
                    <View style={{width:60, }}>
                        <Icon
                            name="navigate-next"
                            type="MaterialIcons"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    // ĐỂ TẠM LOGOUT VÀO ĐÂY
                    onPress={() => signOut()}
                    style={{
                        flexDirection:'row',
                        marginHorizontal:width*0.27,
                        height:40,
                        backgroundColor:COLORS.primary,
                        justifyContent:'space-evenly',
                        alignItems:'center', 
                        borderWidth:0.5,
                        borderRadius:20,
                    }}
                >
                        <Icon
                            name="power-off"
                            type="FontAwesome"
                            style={{color:COLORS.lightGray2}}
                        />
                        <Text style={{...FONTS.h4, color:COLORS.lightGray2}}>Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderEdit()}
            {renderManageUser()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }, 
    rowFront: {
        flexDirection:'row',
        paddingLeft:20,
        alignItems:'center',
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
})

export default User;
