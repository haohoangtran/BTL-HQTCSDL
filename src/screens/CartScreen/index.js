import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity, Keyboard, FlatList
} from 'react-native';

import PropTypes from 'prop-types';
import {Tabs, Tab, Icon} from 'react-native-elements'
import Food from "../../components/Food";
import {ConfirmDialog} from "react-native-simple-dialogs";
import FoodInCard from "../../components/FoodInCart/index";
import {Header} from 'react-navigation';
import Badge from 'react-native-smart-badge';
import {getCart} from "../../configs/index";

export default class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const cart = this.props.navigation.state.params.cart;
        return (
            <View style={{flex: 1}}>
                <FlatList
                    keyboardDismissMode="on-drag"
                    style={{flex: 1}}
                    numColumns={1}
                    ref="listview"
                    data={getCart()}
                    renderItem={({item}) =>
                        <FoodInCard data={item} coutChange={(count) => {
                            item.count = count;
                            console.log(getCart())
                        }}/>
                    }
                />
            </View>
        )
    }
}