import React, {useState, useEffect, useMemo} from 'react';
import { ActivityIndicator , View, Text} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Restaurant, 
         OrderDelivery,
         Cart,
         Payment01,
         Payment02,
         Payment03,
         CheckOuts, 
         OrderPlaced, 
         User,
         EditProfile, 
         ManageAddress, 
         Settings, Login, Register,ForgotPassword} from './screens';
import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './componets/context';
import Tabs from './navigation/tabs';


const Stack = createStackNavigator();

const App = () => {

    const initialLoginState = {
        isLoading : true,
        userName : null, 
        userToken : null,
    }

    const loginReducer = (prevState, action) =>{

       switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGIN':
          return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGOUT':
          return {
            ...prevState,
            userName: null,
            userToken: null,
            isLoading: false,
          };
        case 'REGISTER':
            return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
            };
      }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer,initialLoginState)

    const authContext = useMemo(() => ({
        signIn: async(foundUser) =>{
                const userToken = String(foundUser[0].userToken);
                const userName = foundUser[0].username;
                try{
                    await AsyncStorage.setItem('userToken', userToken);
                } catch(e){
                    console.log(e);
                }
                  
            dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async() =>{
            try{
                await AsyncStorage.removeItem('userToken')
            } catch(e){     
                console.log(e)
            }
            dispatch({type: 'LOGOUT'});
        },
        register: () =>{
            // setUserToken('fgkj');
            // setIsLoading(false);
        },
    }));

    useEffect(() => {
        setTimeout( async() => {
            let userToken;
            userToken = null;
            try{
                userToken = await AsyncStorage.getItem('userToken');
            } catch(e){
                console.log(e)
            }
           dispatch({type: 'REGISTER' , token: userToken});
        }, 1000);
    }, [])

    if(loginState.isLoading){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>huy</Text>
            </View>
        );
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                { loginState.userToken != null ? (
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        // initialRouteName={'Login'}
                        stackContent = {props => <StackContent {...props}/>}
                    >
                        <Stack.Screen name="Home" component={Tabs} />
                        <Stack.Screen name="Restaurant" component={Restaurant} />
                        <Stack.Screen name="Cart" component={Cart} />
                        <Stack.Screen name="Payment01" component={Payment01} />
                        <Stack.Screen name="Payment02" component={Payment02} />
                        <Stack.Screen name="Payment03" component={Payment03} />
                        <Stack.Screen name="CheckOuts" component={CheckOuts}/>
                        <Stack.Screen name="OrderPlaced" component={OrderPlaced}/>
                        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                        <Stack.Screen name="User" component={User} />
                        <Stack.Screen name="EditProfile" component={EditProfile}/>
                        <Stack.Screen name="ManageAddress" component={ManageAddress}/>
                        <Stack.Screen name="Settings" component={Settings}/>
                    </Stack.Navigator>
                )
            :
                <RootStackScreen/>
            }
                
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default App;