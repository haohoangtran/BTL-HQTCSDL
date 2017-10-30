import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Stars from 'react-native-stars-rating';
import {formatMoney} from "../../utils/index";

export default class Food extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.data)
    }

    render() {

        const item = this.props.data;
        const percent = Math.ceil(Math.abs((item.coint_new - item.coint_old) / item.coint_old) * 100);
        if (percent) {
            return (
                <View style={{padding: 8, width: '45%', borderWidth: 1, margin: 8, elevation: 8, borderColor: 'white'}}>
                    <Image source={{uri: item.url}}
                           style={{width: "100%", height: Dimensions.get('window').height / 4, resizeMode: 'cover'}}/>
                    <Text numberOfLines={1} style={{fontSize: 18, marginBottom: 16}}>{item.name}</Text>
                    <Text style={{color: '#E91E63'}}>Giá KM: {formatMoney(item.coint_new)}đ</Text>
                    <Text style={{textDecorationLine: 'line-through', fontSize: 11}}>Giá
                        cũ: {formatMoney(item.coint_old)}đ</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <Stars
                            isActive={false}
                            rateMax={5}
                            isHalfStarEnabled={false}
                            onStarPress={(rating) => console.log(rating)}
                            rate={Math.floor(item.rate)}
                            size={20}
                        />
                        <Text numberOfLines={1} style={{fontSize: 9, alignSelf: 'center'}}>({item.cout_rate} đánh
                            giá)</Text>
                    </View>

                    <TouchableOpacity style={{
                        width: '100%',
                        height: 48,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                                      onPress={() => {
                                          this.props.orderClick(item);
                                      }}
                    >
                        <Text style={{alignSelf: 'center', fontSize: 16, color: 'white'}}>ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                    <View style={{position: 'absolute', top: 0, right: 0, backgroundColor: '#FFFF00', opacity: 0.8}}>
                        <Text style={{padding: 4}}>-{percent}%</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{padding: 8, width: '45%', borderWidth: 1, margin: 8, elevation: 8, borderColor: 'white'}}>
                    <Image source={{uri: item.url}}
                           style={{width: "100%", height: Dimensions.get('window').height / 4, resizeMode: 'cover'}}/>
                    <Text numberOfLines={1} style={{fontSize: 18, marginBottom: 16}}>{item.name}</Text>
                    <Text style={{color: '#E91E63'}}>Giá KM: {formatMoney(item.coint_new)}đ</Text>
                    <Text style={{textDecorationLine: 'line-through', fontSize: 11}}>Giá
                        cũ: {formatMoney(item.coint_old)}đ</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <Stars
                            isActive={false}
                            rateMax={5}
                            isHalfStarEnabled={false}
                            onStarPress={(rating) => console.log(rating)}
                            rate={Math.floor(item.rate)}
                            size={20}
                        />
                        <Text numberOfLines={1} style={{fontSize: 9, alignSelf: 'center'}}>({item.cout_rate} đánh
                            giá)</Text>
                    </View>

                    <TouchableOpacity style={{
                        width: '100%',
                        height: 48,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                                      onPress={() => {
                                          this.props.orderClick(item);
                                      }}
                    >
                        <Text style={{alignSelf: 'center', fontSize: 16, color: 'white'}}>ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }


}

Food.propTypes = {
    data: PropTypes.object.isRequired,
    orderClick: PropTypes.func,
};