import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardScreen from './screens/DashboardScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import MilestonesScreen from './screens/MilestonesScreen';
import MyChildScreen from './screens/MyChildScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: [
        {
          display: 'flex',
        },
        null,
      ],
    })}
  >
    <Tab.Screen
      name="Today"
      component={DashboardScreen}
      options={{
        tabBarLabel: 'Today',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="today" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Activities"
      component={ActivitiesScreen}
      options={{
        tabBarLabel: 'Activities',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="event" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Milestones"
      component={MilestonesScreen}
      options={{
        tabBarLabel: 'Milestones',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="star" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="MyChild"
      component={MyChildScreen}
      options={{
        tabBarLabel: 'My Child',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="child-care" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  const showOnboarding = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showOnboarding ? (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : (
          <Stack.Screen
            name="MainTabNavigator"
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;