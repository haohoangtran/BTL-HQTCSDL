import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements'
import PropTypes from 'prop-types';
import {formatMoney} from "../../utils/index";

export default class FoodInCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.data.count || 0,
        }
    }

    render() {
        const item = this.props.data;
        return (
            <View style={{flexDirection: 'row'}}>
                <Image source={{uri: item.url}}
                       style={{width: 100, height: 100, resizeMode: 'cover'}}/>
                <View>
                    <Text>{item.name}</Text>
                    <Text>Giá: {formatMoney(item.coint_new)}đ</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            if (this.state.count) {
                                this.setState({count: this.state.count - 1}, function () {
                                    this.props.coutChange(this.state.count);
                                })
                            }
                        }}>
                            <Icon name={'ios-remove'} type={'ionicon'} size={24} iconStyle={{padding: 8}}/>
                        </TouchableOpacity>

                        <Text style={{margin: 8}}>{this.state.count}</Text>
                        <TouchableOpacity onPress={() => {
                            this.setState({count: this.state.count + 1}, function () {
                                this.props.coutChange(this.state.count);
                            });
                        }}>
                            <Icon name={'ios-add'} type={'ionicon'} size={24} iconStyle={{padding: 8}}/>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
}

FoodInCard.propTypes = {
    data: PropTypes.object.isRequired,
    coutChange: PropTypes.func.isRequired
};