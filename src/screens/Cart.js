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
    ScrollView,
} from "react-native";
import { Icon, ListItem, Tab } from "native-base";
import tabs from "../navigation/tabs";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import Tabs from "../navigation/tabs";

import {
    deleteProduct, 
    increaseProduct, 
    decreaseProduct,
} from '../componets/productTag/action/index'
import ProductCart from "../componets/productCart/index";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");
const Cart = (props,navigation) => {
   
    const formatCurrency = (monney) => {
        const mn = String(monney);
        return mn
          .split('')
          .reverse()
          .reduce((prev, next, index) => {
            return (index % 3 ? next : next + '.') + prev;
          });
      };

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
                    onPress={() => props.navigation.goBack()}
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

    function giohangtrong () {
        return(
            <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 50,
              }}>
              <Image
                source={require('../../src/assets/images/nope_basket.jpg')}
                style={{width: 200, height: 200}}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                color: 'black',
                paddingBottom: 10,
              }}>
              {'Cart is empty'}
            </Text>
  
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'grey',
                  width: '80%',
                  paddingBottom: 30,
                }}>
                {'You have not added any products to your cart yet'}
              </Text>
            </View>
          </View>
        );
    }
    //body cart
    function renderItemsCart(item) {
        return(   
            <View>       
                {  (props.cart.length === 0 )?
                    (
                        <View style={{height:height*0.5}}>
                            <Text style={{color:'red'}}>huydasdasdasda</Text>
                        </View>
                    ) 
                    :
                    (  
                        <View>
                            <ProductCart
                                name ={item.name}
                                price = {item.price}
                                quantity={item.quantity}
                                imagesProduct = {item.imagesProduct} 
                                ondecreaseProduct={() => props.decreaseProduct(item)}
                                onincreaseProduct={() => props.increaseProduct(item)}
                                ondeleteProduct={() => props.deleteProduct(item)}
                            />
                        </View>
                    )
                }
            </View>
        );
    }

    //total cart
    function renderTotalCart() {
        return (
            <View
                style={[
                    styles.rowFront,
                    {
                        marginTop: 10,
                        marginBottom:60,
                        paddingHorizontal: width * 0.05,
                        paddingVertical: height * 0.035,
                        height:height*0.2,
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
                        <Text style={{ ...FONTS.h2,  color:'black'  }}>
                            Total
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...FONTS.h2, color:'black', }}>
                            {`${formatCurrency(props.totalprice)}`}đ
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
    function renderTabs() {
        return(
            <Tabs/>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeaderCart()}
            {    
                    props.cart.length === 0 ?
                    (<View>{giohangtrong()}</View>)
                    :
                    (
                        <View>
                            <ScrollView style={{height:height*0.6}}>
                                 {props.cart.map((prod) => renderItemsCart(prod))}
                            </ScrollView>           
                            <View style={{height:height*0.3}}>
                                {renderTotalCart()}
                            </View>
                        </View>
                    )   
                        
            }
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

const mapStatesToProps = (state) => {
    return {
        cart : state.cart.cartAr, 
        totalprice: state.cart.totalprice,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        decreaseProduct : (product_current) => dispatch(decreaseProduct(product_current)),
        increaseProduct : (product_current) => dispatch(increaseProduct(product_current)),
        deleteProduct : (product_current) => dispatch(deleteProduct(product_current)),
    }
}


export default connect (mapStatesToProps, mapDispatchToProps)(Cart);
