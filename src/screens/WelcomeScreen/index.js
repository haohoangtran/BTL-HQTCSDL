import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Dimensions, Image, TouchableOpacity, Keyboard
} from 'react-native';

import AccountKit, {
    LoginButton,
    Color,
    StatusBarStyle,
} from 'react-native-facebook-account-kit';
import {ProgressDialog} from "react-native-simple-dialogs";

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            authToken: null,
            loggedAccount: null,
            progressVisible: false
        }
        this.handleCheckPhoneNumber = this._handleCheckPhoneNumber.bind(this);
        this.getPhoneCompleted = this._getPhoneCompleted.bind(this);
        const {navigate} = this.props.navigation;
        this.navigate = navigate;

    }

    componentWillMount() {
        AccountKit.getCurrentAccount()
            .then((account) => {
                const {id, email, phoneNumber} = account;
                console.log('account', phoneNumber)
            })
    }

    render() {
        const {width, height} = Dimensions.get('window');

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../images/plain_hoocons_image.png')}
                           style={{width: width / 3, height: width / 3, resizeMode: 'contain'}}/>
                    <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold', marginTop: 8}}>Welcome to
                        Hoocon community</Text>
                    <Text
                        style={{textAlign: 'center', width: Dimensions.get('window').width / 5 * 3, marginTop: 16}}>A
                        newer, stronger way to connect everyone over the world</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end',}}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 48,
                            marginHorizontal: 32,
                            alignSelf: 'center',
                            marginBottom: 4,
                            paddingVertical: 16,
                            backgroundColor: '#e84545',
                            width: width - 64
                        }}
                        onPress={() => {
                            const {navigate} = this.props.navigation;
                            navigate('Login', {phoneNumber: ''})
                        }}>
                        <Text style={{color: 'white', fontSize: 14, alignSelf: 'center'}}>Continue with phone
                            number</Text>
                    </TouchableOpacity>
                    <LoginButton style={{
                        alignSelf: 'center',
                        marginBottom: 24,
                        marginHorizontal: 32,
                        width: width - 64
                    }} type="phone"
                                 onLogin={(token) => this.onLogin(token)} onError={(e) => this.onLogin(e)}>
                        <Text style={{fontWeight: 'bold', fontSize: 12, alignSelf: 'center', padding: 16}}>Register
                            an
                            account</Text>
                    </LoginButton>


                </View>
                <ProgressDialog
                    visible={this.state.progressVisible}
                    message="Please wait..."
                />
            </View>
        )
    }

    onLogoutPressed() {
        AccountKit.logout()
            .then(() => {
                this.setState({
                    authToken: null,
                    loggedAccount: null
                })
            })
            .catch((e) => console.log('Failed to logout'))
    }


    _handleCheckPhoneNumber(response) {
        this.setState({progressVisible: false}, function () {
            const {id, email, phoneNumber} = this.state.loggedAccount;

            if (response.status === 200) {
                console.log('phone vvvvvvvv1')
                this.navigate('EnterPassword', {phoneNumber: '+' + phoneNumber.countryCode + phoneNumber.number});
            } else {
                console.log('phone vvvvvvvv2')
                this.navigate('Login', {phoneNumber: phoneNumber.countryCode + phoneNumber.number})
            }
            console.log('phone', phoneNumber)
        });
        //TODO: checkusername
        console.log('phone vvvvvvvv')

    }


    _getPhoneCompleted() {
        this.setState({progressVisible: true});
        const {id, email, phoneNumber} = this.state.loggedAccount;

        getCheckPhoneNumberExist('+' + phoneNumber.countryCode + phoneNumber.number)
            .then((response) => this.handleCheckPhoneNumber(response))
            .catch((error) => {
                console.log("faild to get " + error)
            })

    }


    onLogin(token) {

        if (!token) {
            console.warn('User canceled login');
        } else {
            AccountKit.getCurrentAccount()
                .then((account) => {
                    this.setState({
                        authToken: token,
                        loggedAccount: account
                    }, this.getPhoneCompleted)
                });
        }
    }
}