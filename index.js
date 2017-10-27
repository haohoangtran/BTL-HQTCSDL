import { AppRegistry } from 'react-native';
import App from './App';

import { StackNavigator } from 'react-navigation';
import SplashScreen from "./src/screens/SplashScreen";
import IntroScreen from "./src/screens/IntroScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export const MyApp = StackNavigator({
    Home: { screen: SplashScreen },
    Intro: { screen: IntroScreen },
    Welcome: {screen: WelcomeScreen},
});

AppRegistry.registerComponent('QuickOderN', () => MyApp);
