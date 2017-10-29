import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity, Keyboard, FlatList
} from 'react-native';
import {Tabs, Tab, Icon} from 'react-native-elements'
import Food from "../../components/Food";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            selectedTab: 'hotsales',
            dataRender: []
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
    }

    changeTab(selectedTab) {
        this.setState({selectedTab})
    }


    render() {
        const {selectedTab} = this.state;
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
                    <View>
                        {this.renderFlatList()}
                    
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
                    <Food data={item} orderClick={(item) => console.log(item)}/>
                }
            />
        )
    }
}