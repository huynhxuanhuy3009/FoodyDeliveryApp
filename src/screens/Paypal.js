import React, { Component, useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Modal
} from "react-native";
// import Modal from "react-native-modal";
import { WebView } from "react-native-webview";

const Paypal = () => {
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState("pending")
    return (

        <SafeAreaView style={{ marginTop: 100, marginHorizontal: 20 }}>
            <Modal
                visible={showModal}
                onRequestClose={()=>{setShowModal(false)}} 
            >
                <WebView
                            source={{
                                uri: "http://10.0.3.2:3000",
                                headers: {
                                    'Access-Control-Allow-Methods': '*',
                                    'Access-Control-Allow-Origin': '*'
                                }
                            }}
                            // onNavigationStateChange={data =>
                            //     this.handleResponse(data)
                            // }
                            // injectedJavaScript={`document.f1.submit()`}
                        />
            </Modal>
            
            <TouchableOpacity
                       style={{
                        width: 200,
                        height: 50,
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor:"#fff4c4"
                    }}
                    onPress={() => setShowModal(true)}
            >
                <Text>Pay with paypal</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Paypal;


// export default class Paypal extends Component {
//     state = {
//         showModal: false,
//         status: "Pending",
//     };
//     render() {
//         return (
//             <SafeAreaView style={{ marginTop: 100, marginHorizontal: 20 }}>
//                 <Modal
//                     visible={this.state.showModal}
//                     onRequestClose={() => this.setState({ showModal: false })}
//                 >
//                     <WebView
//                         javaScriptEnabled={true}
//                         source={{ uri: "https://localhost:3000" }}
//                     />
//                 </Modal>
//                 <TouchableOpacity
//                     onPress={() => this.setState({ showModal: true })}
//                     style={{
//                         width: 200,
//                         height: 50,
//                         borderWidth: 1,
//                         alignItems: "center",
//                         justifyContent: "center",
//                         backgroundColor:"#fff4c4"
//                     }}
//                 >
//                     <Text>Pay With Paypal</Text>
//                 </TouchableOpacity>
//                 <Text>Payment Status : {this.state.status}</Text>
//             </SafeAreaView>
//         );
//     }
// }
