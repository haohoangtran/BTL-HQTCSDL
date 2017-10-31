import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header} from 'react-navigation';
import {Icon} from 'react-native-elements'
import HeaderImageScrollView, {TriggeringView} from 'react-native-image-header-scroll-view';
import {formatMoney} from "../../utils/index";


const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;

const styles = StyleSheet.create({
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    keywords: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    keywordContainer: {
        backgroundColor: '#999999',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    keyword: {
        fontSize: 16,
        color: 'white',
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    sectionLarge: {
        height: 600,
    },
});

export default class FoodDetailScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {showNavTitle: false};
    }

    render() {
        const food = this.props.navigation.state.params.food;
        const tvShowContent = {
            title: food.name,
            overview: `
    Lorem ipsum dolor sit amet, exerci habemus concludaturque vis cu. Partem propriae accusamus ad vel, est hinc duis causae ne, ea mei appareat evertitur. Te vix partiendo delicatissimi. Aeque accumsan deterruisset at vel, ea inani altera habemus usu. Pertinax iudicabit suscipiantur cum an, nec percipit deseruisse cu. Qui eu albucius evertitur, usu ei adhuc eleifend.

Deleniti sensibus scripserit ei per, mei ad porro choro. Sea augue nemore verear ei. Duo accumsan forensibus et. Unum menandri id sed. Vide solet epicurei te usu, ex duo mazim epicurei accommodare. Mel at impetus tamquam reprimique.
`,
            image: {uri: food.url},
            year: 2005,
            coint_new: food.coint_new,
            genres: ['Action & Adventure', 'Drama', 'Sci-Fi & Fantasy'],
            keywords: [
                'time travel',
                'time machine',
                'phone booth',
                'alien',
                'time traveler',
                'police box',
                'space and aliens',
            ],
        };
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content"/>
                <HeaderImageScrollView
                    maxHeight={MAX_HEIGHT}
                    minHeight={MIN_HEIGHT}
                    maxOverlayOpacity={0.6}
                    minOverlayOpacity={0.3}
                    fadeOutForeground
                    renderHeader={() => <Image source={tvShowContent.image} style={styles.image}/>}
                    renderFixedForeground={() =>
                        <Animatable.View
                            style={styles.navTitleView}
                            ref={navTitleView => {
                                this.navTitleView = navTitleView;
                            }}
                        >
                            <Text style={styles.navTitle}>
                                {tvShowContent.title}, ({`${formatMoney(tvShowContent.coint_new)}đ`})
                            </Text>
                        </Animatable.View>}
                    renderForeground={() =>
                        <View style={styles.titleContainer}>
                            <Text style={styles.imageTitle}>
                                {tvShowContent.title}
                            </Text>
                        </View>}
                >
                    <TriggeringView
                        style={styles.section}
                        onHide={() => this.navTitleView.fadeInUp(200)}
                        onDisplay={() => this.navTitleView.fadeOut(100)}
                    >
                        <Text style={styles.title}>
                            <Text style={styles.name}>{tvShowContent.title}</Text>,
                            ({`${formatMoney(tvShowContent.coint_new)}đ`})
                        </Text>
                    </TriggeringView>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Tổng quan</Text>
                        <Text style={styles.sectionContent}>
                            {tvShowContent.overview}
                        </Text>
                    </View>
                    <View style={[styles.section, styles.sectionLarge]}>
                        <Text style={styles.sectionTitle}>Từ khoá</Text>
                        <View style={styles.keywords}>
                            {tvShowContent.keywords.map(keyword =>
                                <View style={styles.keywordContainer} key={keyword}>
                                    <Text style={styles.keyword}>
                                        {keyword}
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                </HeaderImageScrollView>
                <TouchableOpacity
                    style={{position: 'absolute', top: 12, left: 0, padding: 16}}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                >
                    <Icon size={24} color={"white"} name={'ios-arrow-back'} type={'ionicon'}/>
                </TouchableOpacity>
            </View>
        );
    }
}