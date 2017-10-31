import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity, DeviceEventEmitter
} from 'react-native';
import {Icon} from 'react-native-elements'
import PropTypes from 'prop-types';
import {formatMoney} from "../../utils/index";

export default class FoodInDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.data.count || 0,
        }
    }

    render() {
        const item = this.props.data;
        return (
            <View style={{flexDirection: 'row', paddingHorizontal: 8, marginVertical: 4}}>
                <Image source={{uri: item.url}}
                       style={{width: 100, height: 100, resizeMode: 'cover'}}/>
                <View style={{paddingLeft: 8, width: '70%'}}>
                    <Text numberOfLines={1} style={{fontSize: 18, color: 'gray'}}>{item.name}</Text>
                    <Text style={{
                        fontSize: 15,
                        color: '#EC407A',
                        marginTop: 8,
                    }}>Giá: {formatMoney(item.coint_new * this.state.count)}đ</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            if (this.state.count) {
                                this.setState({count: this.state.count - 1}, function () {
                                    this.props.coutChange(this.state.count);
                                })
                            }
                        }}>
                            <Icon name={'ios-remove'} type={'ionicon'} color={"#2196F3"} size={24}
                                  iconStyle={{padding: 8}}/>
                        </TouchableOpacity>

                        <Text style={{margin: 8, color: "#2196F3", fontSize: 18}}>{this.state.count}</Text>
                        <TouchableOpacity onPress={() => {
                            this.setState({count: this.state.count + 1}, function () {
                                this.props.coutChange(this.state.count);
                            });
                        }}>
                            <Icon name={'ios-add'} color={"#2196F3"} type={'ionicon'} size={24}
                                  iconStyle={{padding: 8}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

FoodInDialog.propTypes = {
    data: PropTypes.object.isRequired,
    coutChange: PropTypes.func.isRequired
};