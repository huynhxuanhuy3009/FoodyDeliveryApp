import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";

export default class Paypal extends Component {
    state = {
        showModal: false,
        status: "Pending",
    };
    render() {
        return (
            <SafeAreaView style={{ marginTop: 100, marginHorizontal: 20 }}>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView
                        javaScriptEnabled={true}
                        source={{ uri: "https://localhost:3000" }}
                    />
                </Modal>
                <TouchableOpacity
                    onPress={() => this.setState({ showModal: true })}
                    style={{
                        width: 200,
                        height: 50,
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor:"#fff4c4"
                    }}
                >
                    <Text>Pay With Paypal</Text>
                </TouchableOpacity>
                <Text>Payment Status : {this.state.status}</Text>
            </SafeAreaView>
        );
    }
}
