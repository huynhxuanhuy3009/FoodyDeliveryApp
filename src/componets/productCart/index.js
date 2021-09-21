import React from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image,
} from "react-native";
import { Icon } from "native-base";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
import styles from "./style";

const {width, height} = Dimensions.get('window');
const ProductCart = (props) => {
    return (
        <View style={[styles.rowFront, { flexDirection: "row" }]}>
            {/* image */}
            <View
                style={{
                    width: width * 0.3,
                }}
            >
                <Image
                    source={props.photo}
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
                    height: height * 0.08,
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ ...FONTS.h4 }}>{props.name}</Text>
                <Text style={{ ...FONTS.h4 }}>{`Price: ${props.price}`}</Text>
            </View>

            {/* button xoa item */}

            <TouchableOpacity
                style={{
                    // backgroundColor:'red',
                    marginBottom: 50,
                    marginLeft: 30,
                }}
                onPress={() => props.ondeleteProduct()}
            >
                <Icon name="highlight-remove" type="MaterialIcons" />
            </TouchableOpacity>

            {/* button + -  */}
            <View
                style={{
                    position: "absolute",
                    width: width * 1.65,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingTop: 30,
                    // backgroundColor:'red',
                }}
            >
                <TouchableOpacity 
                    style={styles.btn_tru}
                    onPress= {() => props.ondecreaseProduct()}
                >
                    <Text style={{ ...FONTS.h3 }}>-</Text>
                </TouchableOpacity>

                <View
                    style={styles.valQuantity}
                >
                    <Text style={{ ...FONTS.h3 }}>
                        {props.quantity}
                    </Text>
                </View>

                <TouchableOpacity 
                    style={styles.btn_cong}
                    onPress={() => props.onincreaseProduct()}
                >
                    <Text style={{ ...FONTS.h3 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductCart;
