import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SplashScreen from "./src/screens/SplashScreen";
import IntroScreen from "./src/screens/IntroScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CartScreen from "./src/screens/CartScreen";
import FoodDetailScreen from "./src/screens/FoodDetailScreen";
import ShipDetailScreen from "./src/screens/ShipDetailScreen/index";

export const MyApp = StackNavigator({
    Home: {screen: HomeScreen},
    ShipDetail: {screen: ShipDetailScreen},
    Splash: {screen: SplashScreen},
    Cart: {screen: CartScreen},
    Intro: {screen: IntroScreen},
    Welcome: {screen: WelcomeScreen},
    FoodDetail: {screen: FoodDetailScreen}
});

AppRegistry.registerComponent('HooconApp', () => MyApp);
