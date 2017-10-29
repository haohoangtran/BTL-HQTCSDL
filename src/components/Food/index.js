import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image
} from 'react-native';

import PropTypes from 'prop-types';

export default class Food extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.data)
    }

    render() {
        const item = this.props.data;
        return (
            <View style={{margin: 8, width: '40%'}}>
                <Image source={{uri: item.url}} style={{width: 100, height: 100}}
                />
                <Text>{item.name}</Text>
                <Text>Giá cũ: {item.coint_old}</Text>
                <Text>Giá mới: {item.coint_new}</Text>
            </View>
        )
    }
}

Food.propTypes = {
    data: PropTypes.object.isRequired,
};