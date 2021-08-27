import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image,TextInput, Dimensions} from 'react-native';
import {Icon} from 'native-base';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';

const {width, height} = Dimensions.get('window');
const Register = ({navigation}) => {

    function renderHeaderRegister() {
        return(
            <View 
                style={{
                    height:'10%',
                    backgroundColor:COLORS.primary, 
                    flexDirection:'row',
                }}>
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('Login')}
                        style={{
                            paddingLeft:SIZES.padding * 2,
                            justifyContent:'center'
                        }}
                    >
                        <Icon
                            name='arrow-back-sharp'
                            type='Ionicons'
                            style={{
                                width:30,
                                height:30, 
                                color:COLORS.lightGray2, 
                            }}
                        />
                    </TouchableOpacity>
                    <Text 
                        style={{
                            ...FONTS.h1,
                            paddingLeft:100,
                            alignSelf:'center', 
                            color:COLORS.lightGray2
                        }}
                    >
                        Register
                    </Text>
             </View>
        );
    }

    function renderMainRegister() {
        return(
            <View style={{alignItems:'center'}}>
                <Text 
                    style={{
                        ...FONTS.h1,
                        color:COLORS.primary,
                        paddingTop:SIZES.padding*20,
                        fontSize:50                   
                    }}
                >
                    Foodiez
                </Text>

                {/* input infomation */}
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
                    placeholder='Password'
                />
                <TextInput
                    style={[
                        styles.textinput,    
                    ]}
                    placeholder='Confirm Password'
                />

                <TouchableOpacity
                    onPress = {() => navigation.navigate('Login')}
                    style={[
                        styles.button,
                        {backgroundColor:COLORS.primary,borderWidth:0.1},
                    ]}
                >          
                    <Text style={{...FONTS.h1,color:COLORS.white, fontSize:15}}>Register</Text>
                </TouchableOpacity>
            </View>
        );  
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeaderRegister()}
            {renderMainRegister()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:COLORS.lightGray4
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
        marginTop:15,
        alignItems:'center',
        justifyContent:'center'
    },
})

export default Register;
