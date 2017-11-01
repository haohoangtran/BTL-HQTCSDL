import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
export default class Notification extends Component{
    render(){
        return(
            <View style={{margin:8,padding:8,flexDirection:'row',alignItems:'center',borderWidth:1,backgroundColor:'white'}}>
                <Image style={{width:50,height:50,borderRadius:25,resizeMode:'stretch'}} source={require('../../images/plain_hoocons_image.png')}/>
                <Text style={{margin:8,fontSize:15}}>{`GIảm giá sốc tất cả các sản phẩm
                sậlfj
                gálkdjlasj
                faskflaj`}</Text>
            </View>
        )
    }
}