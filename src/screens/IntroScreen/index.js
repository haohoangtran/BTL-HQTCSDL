import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions, Platform, Image, TouchableOpacity
} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';


const configurationOptions = {
    debug: true
}

const NUM_DOT = 4;
export default class IntroScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.state = {
            isEndDot: false
        }

    }

    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <View style={{backgroundColor: 'white'}}>
                <IndicatorViewPager
                    ref="viewPager"
                    style={styles.container}
                    indicator={this._renderDotIndicator()}>
                    <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                        <Image source={require('../../images/waves_image.png')} style={{
                            width: Dimensions.get('window').width,
                            height: 40,
                            position: 'absolute',
                            bottom: Platform.OS === 'ios' ? 24 : 40
                        }}/>
                        <Image source={require('../../images/plain_hoocons_image.png')} style={{
                            width: width / 4,
                            height: width / 4,
                            resizeMode: 'contain',
                            marginTop: Dimensions.get('window').height / 8
                        }}/>
                        <Text style={{textAlign: 'center', fontSize: 26, fontWeight: 'bold', marginTop: 8}}>Hoocon
                            App</Text>
                        <Text
                            style={{textAlign: 'center', width: Dimensions.get('window').width / 5 * 3, marginTop: 16}}>A
                            newer, stronger way to connect everyone over the world</Text>
                    </View>
                    <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                        <Image source={require('../../images/waves_image.png')} style={{
                            width: Dimensions.get('window').width,
                            height: 40,
                            position: 'absolute',
                            bottom: Platform.OS === 'ios' ? 24 : 40
                        }}/>
                        <Image source={require('../../images/flight_image.png')} style={{
                            width: width / 4,
                            height: width / 4,
                            resizeMode: 'contain',
                            marginTop: Dimensions.get('window').height / 8
                        }}/>
                        <Text style={{textAlign: 'center', fontSize: 26, fontWeight: 'bold', marginTop: 8}}>Flight to
                            everywhere</Text>
                        <Text
                            style={{textAlign: 'center', width: Dimensions.get('window').width / 5 * 3, marginTop: 16}}>A
                            newer, stronger way to connect everyone over the world</Text>
                    </View>
                    <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                        <Image source={require('../../images/waves_image.png')} style={{
                            width: Dimensions.get('window').width,
                            height: 40,
                            position: 'absolute',
                            bottom: Platform.OS === 'ios' ? 24 : 40
                        }}/>
                        <Image source={require('../../images/newfriend_image.png')} style={{
                            width: width / 4,
                            height: width / 4,
                            resizeMode: 'contain',
                            marginTop: Dimensions.get('window').height / 8
                        }}/>
                        <Text style={{textAlign: 'center', fontSize: 26, fontWeight: 'bold', marginTop: 8}}>Meet new
                            friends</Text>
                        <Text
                            style={{textAlign: 'center', width: Dimensions.get('window').width / 5 * 3, marginTop: 16}}>A
                            newer, stronger way to connect everyone over the world</Text>
                    </View>
                    <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                        <Image source={require('../../images/waves_image.png')} style={{
                            width: Dimensions.get('window').width,
                            height: 40,
                            position: 'absolute',
                            bottom: Platform.OS === 'ios' ? 24 : 40
                        }}/>
                        <Image source={require('../../images/behappy_image.png')} style={{
                            width: width / 4,
                            height: width / 4,
                            resizeMode: 'contain',
                            marginTop: Dimensions.get('window').height / 8
                        }}/>
                        <Text style={{textAlign: 'center', fontSize: 26, fontWeight: 'bold', marginTop: 8}}>Be
                            happy</Text>
                        <Text
                            style={{textAlign: 'center', width: Dimensions.get('window').width / 5 * 3, marginTop: 16}}>A
                            newer, stronger way to connect everyone over the world</Text>
                    </View>
                </IndicatorViewPager>
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: Platform.OS === 'ios' ? 0 : 16,
                    left: Platform.OS === 'ios' ? 0 : 16,
                    paddingHorizontal: 22,
                    paddingVertical: 16,
                    backgroundColor: 'transparent'
                }}
                                  onPress={() => {
                                      this.refs.viewPager.setPage(NUM_DOT - 1)
                                  }}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: Platform.OS === 'ios' ? 0 : 16,
                    right: Platform.OS === 'ios' ? 0 : 16,
                    paddingHorizontal: 22,
                    paddingVertical: 16,
                    backgroundColor: 'transparent'
                }}
                                  onPress={() => {
                                      if (!this.state.isEndDot) {
                                          this.refs.viewPager._goToNextPage()
                                      } else {
                                          console.log('go to login');
                                          const {navigate} = this.props.navigation;
                                          navigate('Welcome');
                                      }
                                  }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>{this.state.isEndDot ? "Login" : 'Next'}</Text>
                </TouchableOpacity>
            </View>

        )
    }

    _renderDotIndicator() {
        return <PagerDotIndicator onChangePosition={(position) => {
            this.setState({isEndDot: position === NUM_DOT - 1});
            console.log('changedot', position)
        }} selectedDotStyle={{backgroundColor: 'red'}} pageCount={NUM_DOT}/>;
    }
}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height
    }
})