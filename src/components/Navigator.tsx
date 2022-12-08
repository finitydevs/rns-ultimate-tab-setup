import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { getStatusBarHeight } from '../utils';
import Home from './Home/Home';
import HomeBottomNav from './Home/HomeBottomNav';
import LaunchScreen from './LaunchSreen';

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const Navigator = () => {

    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator
                initialRouteName="LaunchScreen"
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    contentStyle: { marginTop: getStatusBarHeight() },
                    headerShown: false,
                }}
            >
                <StackNavigator.Screen
                    name="LaunchScreen"
                    component={LaunchScreen}
                />
                <StackNavigator.Screen
                    name="Home"
                    component={HomeBottomNav}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    )
}


