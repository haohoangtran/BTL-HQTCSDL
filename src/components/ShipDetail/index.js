import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import StepIndicator from 'react-native-step-indicator';
export default class ShipDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPosition:0
        }
    }
    render(){
        const labels = ["Đặt hàng","Tiếp nhận đơn hàng","Đang Ship","Thành công"];
        return(
            <View style={{borderWidth:1,margin:8}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#E91E63',margin:8,fontSize:18,fontWeight:'200'}}>Thoi gian:12321</Text>
                <Text style={{color:'#E91E63',fontSize:18,fontWeight:'200'}}>Gia tien:12321</Text>
                </View>
                <StepIndicator
                    stepCount={labels.length}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                />
            </View>
        )
    }
}