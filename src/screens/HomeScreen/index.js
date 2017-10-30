import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity, Keyboard, FlatList
} from 'react-native';
import {Tabs, Tab, Icon} from 'react-native-elements'
import Food from "../../components/Food";
import {ConfirmDialog} from "react-native-simple-dialogs";
import FoodInCard from "../../components/FoodInCart/index";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            itemSelect: {},
            selectedTab: 'hotsales',
            dataRender: [],
            dialogVisible: false,
            cart: []
        }
    }

    componentDidMount() {
        fetch('https://shipandem.herokuapp.com/food')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({dataRender: responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
        // fetch('http://www.minhbui97.somee.com/api/order/')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson)
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }

    changeTab(selectedTab) {
        this.setState({selectedTab})
    }

    checkInCart(food) {
        if (!food) {
            return null;
        }
        for (let item of this.state.cart) {
            if (item._id.$oid === food._id.$oid) {
                return item;
            }
        }
        return null;
    }

    render() {
        const {selectedTab} = this.state;

        console.log(this.state.cart);
        return (

            <Tabs>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'hotsales'}
                    title={selectedTab === 'hotsales' ? 'hotsales' : null}
                    renderIcon={() => <Icon
                        containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                        color={'#5e6977'} name='whatshot' size={33}/>}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30}/>}
                    onPress={() => this.changeTab('hotsales')}>
                    <View style={{flex: 1}}>
                        {this.renderFlatList()}
                        <ConfirmDialog
                            visible={this.state.dialogVisible}
                            onTouchOutside={() => this.setState({dialogVisible: false})}
                            positiveButton={{
                                title: "OK",
                                onPress: () => {
                                    this.setState({dialogVisible: false});
                                    const check = this.checkInCart(this.state.itemSelect);
                                    if (check) {
                                        console.log('check', check);
                                        console.log('item', this.state.itemSelect);
                                        check.count = this.state.itemSelect['count'];
                                    }
                                    else
                                        this.state.cart.push(this.state.itemSelect)
                                }
                            }}
                            negativeButton={{
                                title: "Hủy",
                                onPress: () => {
                                    this.setState({dialogVisible: false})
                                }
                            }}
                        >
                            <View>
                                <FoodInCard data={this.state.itemSelect} coutChange={(cout) => {
                                    this.state.itemSelect['count'] = cout
                                }}/>
                            </View>
                        </ConfirmDialog>
                    </View>
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'all'}
                    title={selectedTab === 'all' ? 'All' : null}
                    renderIcon={() => <Icon
                        containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                        color={'#5e6977'} name='person' size={33}/>}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30}/>}
                    onPress={() => this.changeTab('all')}>
                    <View>
                        <Text>iyiuy</Text>
                    </View>
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'favorite'}
                    title={selectedTab === 'favorite' ? 'PROFILE' : null}
                    renderIcon={() => <Icon
                        containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                        color={'#5e6977'} name='person' size={33}/>}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30}/>}
                    onPress={() => this.changeTab('favorite')}>
                    <View>
                        <Text>iyiuy</Text>
                    </View>
                </Tab>

            </Tabs>
        )
    }

    renderFlatList() {
        return (

            <FlatList
                keyboardDismissMode="on-drag"
                style={{flex: 1}}
                numColumns={2}
                ref="listview"
                data={this.state.dataRender}
                renderItem={({item}) =>
                    <Food data={item} orderClick={(item) => {
                        const check = this.checkInCart(item);
                        if (check)
                            this.setState({itemSelect: check, dialogVisible: true})
                        else {
                            this.setState({itemSelect: item, dialogVisible: true})
                        }
                    }}/>
                }
            />
        )
    }
}