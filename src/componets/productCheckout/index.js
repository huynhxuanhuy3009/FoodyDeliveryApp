import React from 'react';
import {View, StyleSheet} from 'react-native';

const ProductCheckout = (props) => {
    const formatCurrency = (monney) => {
        const mn = String(monney);
        return mn
          .split('')
          .reverse()
          .reduce((prev, next, index) => {
            return (index % 3 ? next : next + '.') + prev;
          });
    };
    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductCheckout;
