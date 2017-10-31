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
        return (
            <View style={{
                justifyContent: 'space-between',
                padding: 1,
                width: '45%',
                margin: 4,
                elevation: 8,
                borderColor: 'white',
                backgroundColor: 'white',
                paddingBottom: 8
            }}>
                <Image source={{uri: item.url}}
                       style={{width: "100%", height: Dimensions.get('window').height / 4, resizeMode: 'cover'}}/>
                <Text numberOfLines={1} style={{fontSize: 18, marginBottom: 16}}>{item.name}</Text>
                {(() => {
                    if (percent) {
                        return (
                            <View>
                                <Text style={{color: '#E91E63', marginVertical: 8}}>Giá
                                    KM: {formatMoney(item.coint_new)}đ</Text>
                                <Text style={{textDecorationLine: 'line-through', fontSize: 11}}>Giá
                                    cũ: {formatMoney(item.coint_old)}đ</Text>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View>
                                <Text style={{color: '#E91E63', marginVertical: 8}}>Giá
                                    KM: {formatMoney(item.coint_new)}đ</Text>
                            </View>
                        )
                    }
                })()}

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
                    backgroundColor: '#D84315',
                    justifyContent: 'center',
                    alignItems: 'center', marginTop: 4
                }}
                                  onPress={() => {
                                      this.props.orderClick(item);
                                  }}
                >
                    <Text style={{alignSelf: 'center', fontSize: 16, color: 'white'}}>ĐẶT HÀNG</Text>
                </TouchableOpacity>
                {(() => {
                    if (percent) {
                        return (
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                backgroundColor: '#1FC6EB',
                                opacity: 0.9
                            }}>
                                <Text style={{padding: 4, color: 'white'}}>-{percent}%</Text>
                            </View>
                        )
                    }
                })()}

            </View>
        )

    }


}

Food.propTypes = {
    data: PropTypes.object.isRequired,
    orderClick: PropTypes.func,
};