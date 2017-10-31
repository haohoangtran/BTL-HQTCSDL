import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity, Keyboard, FlatList, DeviceEventEmitter
} from 'react-native';
import {Tabs, Tab, Icon} from 'react-native-elements'
import Food from "../../components/Food";
import {ConfirmDialog} from "react-native-simple-dialogs";
import FoodInCard from "../../components/FoodInCart/index";
import {Header} from 'react-navigation';
import Badge from 'react-native-smart-badge';
import {checkInCart, foods, getCart, setCart} from "../../configs/index";
import SearchBar from 'react-native-searchbar'
import FoodInDialog from "../../components/FoodInDialog/index";
export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            itemSelect: {},
            selectedTab: 'hotsales',
            dataRender: foods,
            dialogVisible: false,
            cart: getCart(),
            showSearchBar: false,
            dataFull: foods
        }

    }


    componentDidMount() {

        DeviceEventEmitter.addListener('updateCart', () => {
            const cart = getCart();
            this.setState({cart});
            console.log('update cart home', cart)
        });
        // fetch('https://shipandem.herokuapp.com/food')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         this.setState({dataRender: responseJson})
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
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
        const {navigate} = this.props.navigation;
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
                        <View style={{
                            paddingHorizontal: 8,
                            width: '100%',
                            height: Header.HEIGHT + 8,
                            backgroundColor: '#D84315',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{padding: 8, flexDirection: 'row'}}>
                                <TouchableOpacity style={{marginRight: 10}}>
                                    <Icon name={"motorcycle"} color={"white"}
                                          size={24}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name={"message"} color={"white"} size={24}/>
                                </TouchableOpacity>
                            </View>
                            <Text style={{fontSize: 24, color: 'white'}}>Quick Order</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({showSearchBar: !this.state.showSearchBar})
                                }}>
                                    <Icon containerStyle={{padding: 8}} name={"search"} size={24}
                                          color={"white"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setCart(this.state.cart);
                                    navigate('Cart', {cart: this.state.cart})
                                }}>

                                    <Icon containerStyle={{padding: 8}} name={"shopping-cart"} type={"entypo"} size={24}
                                          color={"white"}/>
                                    {(() => {
                                        if (this.state.cart.length)
                                            return (
                                                <Badge style={{position: 'absolute', top: 0, right: 0}} minWidth={8}
                                                       minHeight={8}
                                                       textStyle={{color: '#fff'}}>{this.state.cart.length}</Badge>
                                            )
                                    })()}
                                </TouchableOpacity>
                            </View>
                            {(() => {
                                if (this.state.showSearchBar) {
                                    return (
                                        <SearchBar
                                            ref={(ref) => this.searchBar = ref}
                                            showOnLoad
                                            placeholder={"Tìm kiếm"}
                                            handleChangeText={(text) => {
                                                console.log(text)
                                            }}
                                            onBack={() => {
                                                this.setState({showSearchBar: false})
                                            }}
                                            onX={() => {
                                                this.setState({showSearchBar: false})
                                            }}
                                        />
                                    )
                                }

                            })()}

                        </View>
                        {this.renderFlatList()}
                        <ConfirmDialog
                            visible={this.state.dialogVisible}
                            onTouchOutside={() => this.setState({dialogVisible: false})}
                            positiveButton={{
                                title: "OK",
                                onPress: () => {
                                    this.setState({dialogVisible: false});
                                    const check = checkInCart(this.state.itemSelect);
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
                                <FoodInDialog data={this.state.itemSelect} coutChange={(cout) => {
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

    handleSearch(text) {

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
                        const check = checkInCart(item);

                        if (check)
                            this.setState({itemSelect: check, dialogVisible: true});
                        else {
                            this.setState({itemSelect: item, dialogVisible: true})
                        }
                    }}/>
                }
            />
        )
    }
}