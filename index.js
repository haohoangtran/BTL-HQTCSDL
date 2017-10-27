import { AppRegistry } from 'react-native';
import App from './App';

import { StackNavigator } from 'react-navigation';
import SplashScreen from "./src/screens/SplashScreen";
import IntroScreen from "./src/screens/IntroScreen";

export const MyApp = StackNavigator({
    Home: { screen: SplashScreen },
    Intro: { screen: IntroScreen },
});

AppRegistry.registerComponent('QuickOderN', () => MyApp);
