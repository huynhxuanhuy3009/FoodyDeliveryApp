import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    ScrollView,
    Alert,
} from "react-native";
import { Icon } from "native-base";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import {decreaseProduct,
    deleteProduct,
    increaseProduct,
    delallProduct,}
    from '../../src/componets/productTag/action/index'
import ProductTag from "../componets/productTag/index";

import { AuthContext } from "../componets/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("window");
const Home = (props) => {
    // Dummy Datas
    const navigation = useNavigation(); 
    const initialCurrentLocation = {
        streetName: "Kuching",
    };
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(
        initialCurrentLocation
    );

    // Hook category
    const [data, setData] = useState([]);
    const [selectCategories, setSelectCategories] = useState(null);
    const [restaurants01, setRrestaurants01] = useState([]);
    const [usertoken, setUsertoken] = useState("");
    useEffect(() => {
        getListItem();
        let userToken;
        async function getusertoken() {
            userToken = await AsyncStorage.getItem("userToken");
            setUsertoken(userToken);
            // getuserProfile(userToken);
        }

        getusertoken();
        return () => {};
    }, []);
    const getuserProfile = (utoken) => {
        const apiURL = "https://foody-store-server.herokuapp.com/users/me";
        fetch(apiURL, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${utoken}`,
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(">>email", responseJson.email);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getListItem = () => {
        const apiURL = "https://foody-store-server.herokuapp.com/categories";
        fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
                setRrestaurants01(responseJson[2].products);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    function renderHeader() {
        return (
            <View style={{ flexDirection: "row", height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                ></TouchableOpacity>

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
                        <Text style={{ ...FONTS.h3 }}>
                            {currentLocation.streetName}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    // onPress={() => navigation.navigate('Cart')}
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                ></TouchableOpacity>
            </View>
        );
    }

    const checkSelectCategories = (values) => {
        console.log(values);
        let cateProduct = [];
        data.map((id) => {
            if (id.name === values.name) cateProduct = id.products;
        });
        setRrestaurants01(cateProduct);
        setSelectCategories(values);
    };

    function renderCatelogy() {
        const renderItem = ({ item, index }) => {
            return (
                <View key={item.id} style={{}}>
                    <TouchableOpacity
                        style={{
                            ...styles.shadow,
                            padding: SIZES.padding,
                            paddingBottom: SIZES.padding * 2,
                            borderRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: SIZES.padding,
                            height: 100,
                            backgroundColor:
                                selectCategories?.id === item.id
                                    ? COLORS.primary
                                    : COLORS.white,
                        }}
                        onPress={() => checkSelectCategories(item)}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor:
                                    selectedCategory?.id == item.id
                                        ? COLORS.white
                                        : COLORS.lightGray,
                            }}
                        >
                            {/* <Image
                                source={item.icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            /> */}
                        </View>
                        <Text
                            style={{
                                marginTop: SIZES.padding,
                                color:
                                    selectCategories?.id == item.id
                                        ? COLORS.white
                                        : COLORS.black,
                                ...FONTS.body5,
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        };
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => {
                        item.id;
                    }}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2,
                    }}
                />
            </View>
        );
    }

    function renderListProduct(productlist) {
        const renderItem = ({ item }) => {
            return (
                <View>
                    <ProductTag
                        onclickProduct={() => onclickProduct(item)}
                        key={item.id}
                        id={item._id}
                        imagesProduct = {item?.image.url}                                               
                        name={item.name}
                        price={item.price}
                    />
                </View>
            );
        };

        // chuyển qua màn hình product 
        const onclickProduct = (prod) => 
            (
                // console.log(prod.name),
                // console.log(prod.image)
                props.navigation.navigate('Restaurant', prod)
            );
       
        return (
            <ScrollView>
                <View style={{ padding: SIZES.padding * 2 }}>
                    <FlatList
                        data={productlist}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => {
                            item.id;
                        }}
                        renderItem={renderItem}
                        numColumns={2}
                        contentContainerStyle={{
                            paddingVertical: SIZES.padding * 2,
                        }}
                    />
                </View>
            </ScrollView>
        );
    }

    function addToBasket() {
        return (
            <TouchableOpacity
                style={{
                    height: 50,
                    width: width * 1,
                    backgroundColor: '#ffa07a',
                    marginBottom: height * 0.09,
                    paddingHorizontal:width*0.07,
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: "center",
                }}
                onPress={() => navigation.navigate("Cart")}
            >
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Icon
                        name = 'shoppingcart'
                        type= 'AntDesign'
                        style={{
                            width: 25,
                            height: 25,
                            color:'#696969',
                            marginRight:10
                        }}
                    />
                    <Text style={{ ...FONTS.body2 , color:'#696969'}}>Add To Basket</Text>
                </View>
                
                <Text style={{ ...FONTS.body2 , color:'#696969' }}>300,000đ</Text>
            </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderCatelogy()}
            {renderListProduct(restaurants01)}
            {addToBasket()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
});

export default Home;
