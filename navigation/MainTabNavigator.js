import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import MilestonesScreen from '../screens/MilestonesScreen';
import MyChildScreen from '../screens/MyChildScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Today" component={DashboardScreen} />
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Milestones" component={MilestonesScreen} />
        <Tab.Screen name="MyChild" component={MyChildScreen} />
    </Tab.Navigator>
);

export default MainTabNavigator;