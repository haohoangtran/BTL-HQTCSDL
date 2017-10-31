import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity, Keyboard, FlatList, DeviceEventEmitter
} from 'react-native';

import PropTypes from 'prop-types';
import {Tabs, Tab, Icon} from 'react-native-elements'
import Food from "../../components/Food";
import {ConfirmDialog} from "react-native-simple-dialogs";
import FoodInCard from "../../components/FoodInCart/index";
import {Header} from 'react-navigation';
import Badge from 'react-native-smart-badge';
import {getCart} from "../../configs/index";
import {formatMoney} from "../../utils/index";

export default class CartScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            totalValue: this.getTotalValue(),
            cart: getCart(),
            dialogVisible: false
        }
    }

    getTotalValue() {
        let totalValue = 0;
        const cart = getCart();
        for (let item of cart) {
            totalValue += item.coint_new * item.count;
        }
        return totalValue
    }

    componentDidMount() {
        DeviceEventEmitter.addListener('updateCart', () => {
            const cart = getCart();
            this.setState({cart})
            console.log('update');
            this.state = {
                totalValue: this.getTotalValue()
            }
        });
    }

    render() {
        console.log("lan dau", this.state.totalValue)
        const cart = this.props.navigation.state.params.cart;
        return (
            <View style={{flex: 1}}>
                <View style={{
                    height: Header.HEIGHT,
                    backgroundColor: '#D84315',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                        DeviceEventEmitter.emit('updateCart')
                    }}
                                      style={{
                                          alignSelf: 'center',
                                          backgroundColor: 'transparent',
                                      }}>
                        <Icon
                            style={{
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                paddingTop: 4,
                                paddingHorizontal: 8,
                            }}
                            size={35}
                            color={"white"} name={'ios-arrow-back'} type={'ionicon'}
                        />
                    </TouchableOpacity>
                    <Text style={{color: 'white', fontSize: 18}}>Giỏ hàng</Text>
                    <View/>
                </View>
                {(() => {
                    if (this.state.cart.length === 0) {
                        return (
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../../images/emptycart.png')}
                                       style={{width: 400, height: 400}}/>
                            </View>
                        )
                    } else {
                        return (
                            <FlatList
                                keyboardDismissMode="on-drag"
                                style={{flex: 1}}
                                numColumns={1}
                                ref="listview"
                                data={this.state.cart}
                                renderItem={({item}) =>
                                    <FoodInCard data={item} coutChange={(count) => {
                                        item.count = count;
                                        this.setState({totalValue: this.getTotalValue()});
                                    }}/>
                                }
                            />
                        )
                    }
                })()}
                {(() => {
                    if (this.state.cart.length !== 0) {
                        return (
                            <View style={{backgroundColor: 'white', paddingTop: 8}}>
                                <View style={{padding: 8}}>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginBottom: 8
                                    }}>
                                        <Text style={{fontSize: 18, fontWeight: '500'}}>Tổng tiền ước tính</Text>
                                        <Text style={{
                                            fontSize: 18,
                                            fontWeight: '500'
                                        }}>{formatMoney(this.state.totalValue)}đ</Text>

                                    </View>
                                    <Text
                                        style={{alignSelf: 'flex-end', fontSize: 13, color: 'gray', fontWeight: '100'}}>Chưa
                                        bao
                                        gồm phí ship</Text>
                                </View>
                                <TouchableOpacity style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 48,
                                    backgroundColor: '#1FC6EB',
                                    marginTop: 8
                                }}>
                                    <Text style={{fontSize: 16, color: 'white'}}>Ship ngay</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                })()}
            </View>
        )
    }
}