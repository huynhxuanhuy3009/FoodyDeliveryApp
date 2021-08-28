import React from 'react';
import {View, StyleSheet, SafeAreaView, Text,Alert,  Image, TouchableOpacity, TextInput, Dimensions, VirtualizedList} from 'react-native';
import {Icon} from 'native-base';

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import Users from '../model/Users'
import {AuthContext} from '../componets/context'

const { width, height } = Dimensions.get("window");
const Login = ({navigation}) => {

    const {signIn} = React.useContext(AuthContext)
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = (val) =>{
        if(val.lenght != 0){
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
            });
        }else{
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }



    const loginHandle = (userName, password) => {
        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }



    function renderMainLogin(){
        return(
            <View style={{ alignItems:'center',}}>     
                <Text 
                    style={{
                        ...FONTS.h1,
                        color:COLORS.primary,
                        paddingTop:SIZES.padding*10,
                        fontSize:50                   
                    }}
                >
                        Foodiez
                </Text>
                
                {/* nhập email pass */}
                <TextInput
                    style={[
                        styles.textinput,
                        {marginTop:50, borderWidth:0.7}
                    ]}
                    placeholder='Username'
                    onChangeText={(val) => textInputChange(val)}

                />
                <View
                    style={[styles.textinput],[styles.eyepassword]}
                >
                <TextInput
                     style={[
                        styles.textinput,
                        {                        
                            marginRight:10,
                            width:width*0.74, 
                            borderRightWidth:0,
                        }
                    ]}
                    placeholder='Password'
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText= {(val) => handlePasswordChange(val)}
                />
                
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    style={{justifyContent:'center',paddingRight:25}}
                >
                    {
                        data.secureTextEntry ? 
                        <Icon
                            name= "eye-off"
                            size={20}
                        />
                        :
                        <Icon
                            name= "eye"
                            size={20}
                        />
                    }
                </TouchableOpacity>
                </View>

                {/* Nut button login */}
                <TouchableOpacity
                    onPress={() => {loginHandle(data.username, data.password)}}
                    style={[
                        {backgroundColor:COLORS.primary},
                        styles.button,          
                    ]}
                >
                    <Text style={{...FONTS.h1,color:COLORS.white, fontSize:15}}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('Register')}
                    style={[
                        styles.button,
                        {backgroundColor:COLORS.secondary,borderWidth:0.1, borderRadius:2}
                    ]}
                >          
                    <Text style={{...FONTS.h1,color:COLORS.primary, fontSize:15}}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={{color:'#E8883E',paddingTop:15}}>Forgot Password ?</Text>
                </TouchableOpacity>

                {/* Login with google, facebook */}
                <Text style={{...FONTS.h4, color:'#555957', paddingTop:15}}>Sign In With</Text>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {backgroundColor:'#E84A4A',flexDirection:'row'}
                    ]}
                >
                    <Icon
                        name="social-google"
                        type="SimpleLineIcons"
                        style={{color:'#fff', paddingRight:8}}
                    />
                    <Text style={{...FONTS.h1,color:COLORS.white, fontSize:15, paddingRight:5}}>GOOGLE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {backgroundColor:'#366DEE', flexDirection:'row'}
                    ]}
                >
                    <Icon
                        name="facebook"
                        type="MaterialCommunityIcons"
                        style={{color:'#fff'}}
                    />
                    <Text style={{...FONTS.h1,color:COLORS.white, fontSize:15, paddingLeft:4}}>FACEBOOK</Text>
                </TouchableOpacity>
                
                
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>   
            {renderMainLogin()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightGray4
    },
    textinput:{
        width:width*0.9,
        height:height*0.07,
        borderRadius:5,
        borderWidth:0.5,
        paddingLeft:10,
    },
    eyepassword:{
        flexDirection:'row', 
        alignItems:'center', 
        borderWidth:0.5, 
        height:height*0.07,
        marginTop:30, 
        marginBottom:30,
        borderRadius:5
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

export default Login;
