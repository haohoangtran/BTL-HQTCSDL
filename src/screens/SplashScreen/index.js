/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions,Image
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {getPrefData} from "../../sharePref";
import {USER_TOKEN} from "../../configs/type";

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    };
    componentDidMount(){
        getPrefData(USER_TOKEN).then((value) => {
            const timer = require('react-native-timer');
            if (value) {
                timer.setTimeout(
                    this, 'hideMsg', () => this._onDone('Intro'), 2000);
            } else {
                timer.setTimeout(
                    this, 'hideMsg', () => this._onDone('Intro'), 2000);
            }
        });

    }

    _onDone(nameRouter) {
        const {navigate} = this.props.navigation;
        this.props
            .navigation
            .dispatch(NavigationActions.reset(
                {
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: nameRouter})
                    ]
                }));
    }

    render() {
        let {width, height} = Dimensions.get('window');
        return (
            <View style={{backgroundColor:'white',justifyContent:'center',alignItems:'center',flex:1}}>
                <Image source={require('../../images/plain_hoocons_image.png')}
                       style={{width: width / 3, height: width / 3, resizeMode: 'contain'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});