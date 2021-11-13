import {ListItem} from "native-base"
import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ProductDetail = (props) => {
    return (
        <View>
            <ListItem style={{flexDirection:'row'}}>
                <View>
                    <Text>Receiver</Text>
                    <Text>{props.fullName}</Text>
                </View>
                <View>
                    <Text>Phone Number</Text>
                    <Text>{props.phoneNumber}</Text>
                </View>
            </ListItem >
            <ListItem style={{flexDirection:'column'}}>
                <Text>Address</Text>
                <Text>{props.address}</Text>
            </ListItem>
            <ListItem style={{flexDirection:'column'}}>
                <Text>Status:</Text>
                <Text>{props.status}</Text>
            </ListItem>
            <ListItem style={{flexDirection:'column'}}>
                <Text>Code Orders:</Text>
                <Text>{props._id}</Text>
            </ListItem>
        </View>
        
    );
}

const styles = StyleSheet.create({})

export default ProductDetail;
