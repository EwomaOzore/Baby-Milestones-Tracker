import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import MainTabNavigatorScreen from '../screens/MainTabNavigatorScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Onboarding">
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="MainTabNavigator" component={MainTabNavigatorScreen} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;