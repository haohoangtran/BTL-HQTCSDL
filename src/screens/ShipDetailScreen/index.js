import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity, Keyboard, FlatList, DeviceEventEmitter
} from 'react-native';
import ShipDetail from "../../components/ShipDetail/index";
export default class ShipDetailScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            dataRender:[1,2]
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    keyboardDismissMode="on-drag"
                    style={{flex: 1}}
                    ref="listview"
                    data={this.state.dataRender}
                    renderItem={({item}) =>
                        <ShipDetail/>
                    }
                />
            </View>
        )
    }
}