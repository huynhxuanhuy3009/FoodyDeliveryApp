import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity,List, ListItem} from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import {Icon} from 'native-base';

const {width, height} = Dimensions.get('window');
const Settings = ({navigation}) => {
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

    function renderSettings() {
        return(
            <View
                style={{
                    paddingHorizontal:width*0.05
                }}
            >
                <Text style={{...FONTS.h2, color:COLORS.primary, paddingHorizontal:5, paddingVertical:20}}>Support</Text>
                {/*Report Problem */}
                <TouchableOpacity 
                    // onPress={() => navigation.navigate('ManageAddress')}
                    style={styles.rowFront}
                >
                    <View style={{width:40,paddingLeft:5}}>
                        <Icon
                            name="exclamationcircle"
                            type="AntDesign"
                            style={{color:COLORS.primary}}
                        />
                    </View>
                    <Text style={{...FONTS.body2,width:260, paddingLeft:20, }}>
                        Report Problem
                    </Text>
                    <View style={{width:60, }}>
                        <Icon
                            name="navigate-next"
                            type="MaterialIcons"
                        />
                    </View>
                </TouchableOpacity>

                {/* Privacy Policy */}
                <TouchableOpacity style={styles.rowFront}>
                    <View style={{width:40,paddingLeft:5}}>
                        <Icon
                            name="lock"
                            type="MaterialCommunityIcons"
                            style={{color:COLORS.primary}}
                        />
                    </View>
                    <Text style={{...FONTS.body2,width:260, paddingLeft:20, }}>
                        Privacy Policy
                    </Text>
                    <View style={{width:60, }}>
                        <Icon
                            name="navigate-next"
                            type="MaterialIcons"
                        />
                    </View>
                </TouchableOpacity>

                {/* Language */}
                <TouchableOpacity 
                    // onPress={() => navigation.navigate('Settings')}
                    style={styles.rowFront}
                >
                    <View style={{width:40,paddingLeft:5}}>
                        <Icon
                            name="language"
                            type="FontAwesome"
                            style={{color:COLORS.primary}}
                        />
                    </View>
                    <Text style={{...FONTS.body2,width:260, paddingLeft:20, }}>
                        Language
                    </Text>
                    <View style={{width:60, }}>
                        <Icon
                            name="navigate-next"
                            type="MaterialIcons"
                        />
                    </View>
                </TouchableOpacity>

                {/* About Us */}
                <TouchableOpacity 
                    // onPress={() => navigation.navigate('Settings')}
                    style={styles.rowFront}
                >
                    <View style={{width:40,paddingLeft:5}}>
                        <Icon
                            name="infocirlce"
                            type="AntDesign"
                            style={{color:COLORS.primary}}
                        />
                    </View>
                    <Text style={{...FONTS.body2,width:260, paddingLeft:20, }}>
                        About Us
                    </Text>
                    <View style={{width:60, }}>
                        <Icon
                            name="navigate-next"
                            type="MaterialIcons"
                        />
                    </View>
                </TouchableOpacity>

                {/* Contact Us */}
                <TouchableOpacity 
                    // onPress={() => navigation.navigate('Settings')}
                    style={styles.rowFront}
                >
                    <View style={{width:40,paddingLeft:5}}>
                        <Icon
                            name="envelope"
                            type="FontAwesome"
                            style={{color:COLORS.primary}}
                        />
                    </View>
                    <Text style={{...FONTS.body2,width:260, paddingLeft:20, }}>
                        Contact Us
                    </Text>
                    <View style={{width:60, }}>
                        <Icon
                            name="navigate-next"
                            type="MaterialIcons"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderSettings()}
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

export default Settings;
