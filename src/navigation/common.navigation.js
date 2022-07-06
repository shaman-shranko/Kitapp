import React from 'react';

import HomeScreen from '../screens/home.screen';
import CalendarScreen from '../screens/calendar.screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default RouterNavigation = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'cloud'
            : 'cloud-outline';
        } else if (route.name === 'Calendar') {
          iconName = focused
            ? 'calendar'
            : 'calendar-outline';
        } return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarLabelStyle: {
        fontSize: 14,
      },
      tabBarActiveTintColor: '#6786DA',
      tabBarInactiveTintColor: 'gray',

      headerStyle: {
        backgroundColor: '#6786DA',
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    })}
    initialRouteName="Home"
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Calendar" component={CalendarScreen} />
  </Tab.Navigator>
)