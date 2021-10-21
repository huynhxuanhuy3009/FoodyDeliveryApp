import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon, ListItem} from 'native-base';


const ProductSearch = (props) => {
    return (
        
        <ListItem 
            style={{
                flexDirection:'row', 
                justifyContent:'space-between',
                alignItems:'center'
            }}
        >
            <Text style={{fontSize:25}}>{props.name}</Text>
            <TouchableOpacity
                onPress={() => props.onclickProduct()}
            >
                <Icon
                    name="right"
                    type="AntDesign"
                />
            </TouchableOpacity>
        </ListItem>
    );
}

const styles = StyleSheet.create({})

export default ProductSearch;
