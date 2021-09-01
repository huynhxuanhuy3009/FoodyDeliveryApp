import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image,
    NativeModules,
} from "react-native";
import { Icon, ListItem } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const { width, height } = Dimensions.get("window");
const Cart = ({ navigation }) => {
    //fake data
    const restaurantData = [
        {
            id: 1,
            name: "Burger",
            rating: 4.8,
            categories: [5, 7],
            // priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy",
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description:
                        "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10,
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description:
                        "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15,
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8,
                },
            ],
        },
        {
            id: 2,
            name: "Pizza",
            rating: 4.8,
            categories: [2, 4, 6],
            // priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson",
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.hawaiian_pizza,
                    description:
                        "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15,
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza,
                    description:
                        "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20,
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10,
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: images.salad,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 10,
                },
            ],
        },
        {
            id: 3,
            name: "Hotdogs",
            rating: 4.8,
            categories: [3],
            // priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James",
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20,
                },
            ],
        },
        {
            id: 4,
            name: "Sushi",
            rating: 4.8,
            categories: [8],
            // priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad",
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: images.sushi,
                    description:
                        "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50,
                },
            ],
        },
        {
            id: 5,
            name: "Cuisine",
            rating: 4.8,
            categories: [1, 2],
            // priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu",
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5,
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8,
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8,
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: images.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8,
                },
            ],
        },
        {
            id: 6,
            name: "Dessets",
            rating: 4.9,
            categories: [9, 10],
            // priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie",
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    price: 2,
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    price: 3,
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.kek_lapis,
                    description: "Layer cakes",
                    calories: 300,
                    price: 20,
                },
            ],
        },
    ];

    const [restaurents, setRestaurents] = useState(restaurantData);
    const [itemMenu, setItemMenu] = useState(null);
    const [orderItems, setOrderItems] = useState([]);

    // tăng giảm số lượng
    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice();
        let item = orderList.filter((a) => a.menuId == menuId);

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1;
                item[0].qty = newQty;
                item[0].total = item[0].qty * price;
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price,
                };
                orderList.push(newItem);
            }

            setOrderItems(orderList);
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1;
                    item[0].qty = newQty;
                    item[0].total = newQty * price;
                }
            }

            setOrderItems(orderList);
        }
    }

    // số lượng
    function getOrderQty(menuId) {
        let orderItem = orderItems.filter((a) => a.menuId == menuId);

        if (orderItem.length > 0) {
            return orderItem[0].qty;
        }

        return 0;
    }

    // header của cart
    function renderHeaderCart() {
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
                        <Text style={{ ...FONTS.h3 }}>Cart</Text>
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

    //body cart
    function renderItemsCart() {
        const renderItem = ({ item }) => (
            <ListItem style={[styles.rowFront, { flexDirection: "row" }]}>
                {/* image */}
                <View
                    style={{
                        width: width * 0.3,
                    }}
                >
                    <Image
                        source={item.photo}
                        style={{
                            width: width * 0.2,
                            height: height * 0.1,
                        }}
                    />
                </View>
                {/* infomation item */}
                <View
                    style={{
                        width: width * 0.5,
                        height: height * 0.07,
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
                    <Text
                        style={{ ...FONTS.h4 }}
                    >{`Price: ${item.rating}`}</Text>
                </View>
                {/* button + - so luong, xoa item */}

                <TouchableOpacity
                    style={{
                        // backgroundColor:'red',
                        marginBottom: 50,
                        marginLeft: 30,
                    }}
                >
                    <Icon name="highlight-remove" type="MaterialIcons" />
                </TouchableOpacity>

                <View
                    style={{
                        position: "absolute",
                        width: width * 1.65,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        paddingTop: 30,
                        // backgroundColor:'red',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 30,
                            backgroundColor: COLORS.darkgray,
                            alignItems: "center",
                            justifyContent: "center",
                            borderTopLeftRadius: 25,
                            borderBottomLeftRadius: 25,
                        }}
                        onPress={() => editOrder("-", item.menuId, item.price)}
                    >
                        <Text style={{ ...FONTS.h3 }}>-</Text>
                    </TouchableOpacity>

                    <View
                        style={{
                            width: 30,
                            backgroundColor: COLORS.secondary,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>
                            {getOrderQty(item.menuId)}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: 30,
                            backgroundColor: COLORS.darkgray,
                            alignItems: "center",
                            justifyContent: "center",
                            borderTopRightRadius: 25,
                            borderBottomRightRadius: 25,
                        }}
                        onPress={() => editOrder("+", item.menuId, item.price)}
                    >
                        <Text style={{ ...FONTS.h3 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </ListItem>
        );

        return (
            <FlatList
                data={restaurents}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                // renderHiddenItem={renderHiddenItem}
            />
        );
    }

    //total cart
    function renderTotalCart() {
        return (
            <View
                style={[
                    styles.rowFront,
                    {
                        marginTop: 20,
                        paddingHorizontal: width * 0.05,
                        paddingVertical: height * 0.02,
                        height: 180,
                        justifyContent: "space-between",
                    },
                ]}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <Text style={{ ...FONTS.h4, color:'black' }}>
                            Subtotal
                        </Text>
                        <Text style={{ ...FONTS.h4,  color:'black' ,paddingVertical:5}}>
                            Discount
                        </Text>
                        <Text style={{ ...FONTS.h2,  color:'black'  }}>
                            Total
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                ...FONTS.h4,
                                color:'black',
                                alignSelf: "flex-end",
                            }}
                        >
                            $18000
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                color:'black',
                                alignSelf: "flex-end",
                                paddingVertical:5
                            }}
                        >
                            10%
                        </Text>
                        <Text style={{ ...FONTS.h2, color:'black', }}>
                            $20000
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Payment01')}
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
                    <Text style={{color:'white', ...FONTS.h4}}>PROCEED TO PAY</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeaderCart()}
            {renderItemsCart()}
            {renderTotalCart()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    rowFront: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 110,
        margin: 3,
        marginBottom: 15,
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});

export default Cart;
