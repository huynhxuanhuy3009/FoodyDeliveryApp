
import { Title } from 'native-base';
import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions, TextInput, Alert} from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const{width, height} = Dimensions.get('window');
const EditProfile = ({navigation}) => {

    const notification = () => Alert.alert(
        'Success !','edit Profile?'[
            {
                text: "cancel",
                style: 'cancel'
            },
            {
                text: "OK",
                style: 'destructive'
            }
            
        ]
    )
    function renderHeaderEditProfile() {
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
                        <Text style={{ ...FONTS.h3 }}>Edit Profile</Text>
                    </View>
                </View>

                <View
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                >
                </View>
            </View>
        );
    }
    function renderUpdateProfile() {
        
        return(
            <View style={{alignItems:'center'}}>
                <Text 
                    style={{
                        ...FONTS.h1,
                        color:COLORS.primary,
                        paddingTop:SIZES.padding*15,
                                          
                    }}
                >
                    Update your account
                </Text>
                <TextInput
                    style={[
                        styles.textinput,
                    ]}
                    placeholder='Name'
                />
                <TextInput
                    style={[
                        styles.textinput,
                    ]}
                    placeholder='Email'
                />
                <TextInput
                    style={[
                        styles.textinput,
                    ]}
                    placeholder='Phone Number'
                />
                <TouchableOpacity
                    title='update thanh cong'
                    onPress={() => notification()}
                    style={[
                        styles.button,
                        {backgroundColor:COLORS.primary,borderWidth:0.1},
                    ]}
                >          
                    <Text style={{...FONTS.h1,color:COLORS.white, fontSize:15}}>UPDATE</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeaderEditProfile()}
            {renderUpdateProfile()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }, 
    textinput:{
        width:width*0.9,
        height:height*0.07,
        borderRadius:5,
        borderWidth:0.5,
        paddingLeft:10,
        marginTop:25,
    },
    button:{
        width:width*0.9,
        height:height*0.06,
        borderRadius:5,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
})

export default EditProfile;
