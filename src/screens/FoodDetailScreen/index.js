import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header} from 'react-navigation';
import {Icon} from 'react-native-elements'
import HeaderImageScrollView, {TriggeringView} from 'react-native-image-header-scroll-view';
import {formatMoney} from "../../utils/index";
import {GiftedAvatar, Send} from 'react-native-gifted-chat';
import Stars from 'react-native-stars-rating';

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
    lastSection:{
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    lastsectionTitle: {
        padding:20,
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
const comments = [
    {
        user: {
            _id: 1,
            name: "Hao"
        },
        content: "NGon vc"
    },
]
export default class FoodDetailScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            showNavTitle: false,
            commentContent:'',
        };
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
            <View style={{flex: 1, backgroundColor: 'transparent'}}>
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
                            <Stars
                                isActive={false}
                                rateMax={5}
                                isHalfStarEnabled={false}
                                onStarPress={(rating) => console.log(rating)}
                                rate={Math.floor(food.rate)}
                                size={20}
                            />
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
                        <Stars
                            isActive={false}
                            rateMax={5}
                            isHalfStarEnabled={false}
                            onStarPress={(rating) => console.log(rating)}
                            rate={Math.floor(food.rate)}
                            size={20}
                        />

                    </TriggeringView>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Tổng quan</Text>
                        <Text style={styles.sectionContent}>
                            {tvShowContent.overview}
                        </Text>
                        <Text style={[styles.sectionTitle,{marginBottom:8}]}>Đánh giá món ăn</Text>


                        <Stars
                            isActive={true}
                            rateMax={5}
                            isHalfStarEnabled={false}
                            onStarPress={(rating) => console.log(rating)}
                            rate={Math.floor(food.rate)}
                            size={20}
                        />
                            <TouchableOpacity style={{marginTop:8,height:40,width:100,padding:8,backgroundColor:'#E91E63',alignItems:'center',justifyContent:'center',borderRadius:24}}>
                                <Text style={{fontSize:16,color:'white'}}>Gửi</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={[styles.lastSection, styles.sectionLarge]}>
                        <Text style={styles.lastsectionTitle}>Bình luận</Text>
                        <FlatList
                            keyboardDismissMode="on-drag"
                            style={{width: '100%', height: Dimensions.get('window').height / 2, marginBottom: 48,margin:4}}
                            numColumns={1}
                            data={comments}
                            renderItem={({item}) =>
                                <View style={{flexDirection: 'row', marginBottom: 16, flex: 1}}>
                                    <GiftedAvatar user={item.user}/>
                                    <View style={{
                                        borderRadius: 8,
                                        backgroundColor: 'gray',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: "40%",
                                        marginLeft: 4
                                    }}>
                                        <Text style={{color:'white'}}>{item.content}</Text>
                                    </View>
                                </View>
                            }
                        />
                        <View style={{
                            height: 48,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: 0,
                            flexDirection: 'row'
                        }}>
                            <TextInput
                                onChangeText={(text)=>{
                                    this.setState({commentContent:text})
                                }}
                                placeholder={"Nhập bình luận"}
                                style={{width: '100%', height: 48, backgroundColor: '#f0f8ff',padding:16}}/>
                            <TouchableOpacity
                                style={{position: 'absolute', right: 0, marginRight: 4}}
                                onPress={()=>{
                                    console.log(this.state.commentContent);
                                }}
                            >
                                <Icon name={"send"} size={24} color={'#E91E63'}/>
                            </TouchableOpacity>
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