import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Temp from './Home/Calendar';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductsList from './Home/ProductsList';
import Home from './Home/HomeScreen';
import Chat from './Home/Chat';

export default function BottomNavigation() {
    const Bottom = createBottomTabNavigator();

    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name="Main"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Entypo name="home" size={32} color="#f43f5e" />
                        );
                    },
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize:focused ? 13 : 10, color: focused ? '#f43f5e' : 'black' }}>
                            Home
                        </Text>
                    ),
                }}
            />
            <Bottom.Screen
                name="Calendar"
                component={Temp}
                options={{
                    headerShown: false,
                    tabBarIcon: tabInfo => {
                        return (
                            <MaterialIcons name="date-range" size={30} color="#f43f5e" />
                        );
                    },
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize:focused ? 13 : 10, color: focused ? '#f43f5e' : 'black' }}>
                            Calendar
                        </Text>
                    ),
                }}
            />
            <Bottom.Screen
                name="Essentials"
                component={ProductsList}
                options={{
                    headerShown: false,
                    tabBarIcon: tabInfo => {
                        return (
                            <Entypo name="shopping-cart" size={32} color="#f43f5e" />
                        );
                    },
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize:focused ? 13 : 10, color: focused ? '#f43f5e' : 'black' }}>
                            Essentials
                        </Text>
                    ),
                }}
            />
            <Bottom.Screen
                name="Forum"
                component={Chat}
                options={{
                    headerShown: false,
                    tabBarIcon: tabInfo => {
                        return (
                            <Entypo name="chat" size={32} color="#f43f5e" />
                        );
                    },
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize:focused ? 13 : 10, color: focused ? '#f43f5e' : 'black' }}>
                            Forum
                        </Text>
                    ),
                }}
            />

            <Bottom.Screen
                name="Profile"
                component={Temp}
                options={{
                    headerShown: false,
                    tabBarIcon: tabInfo => {
                        return (
                            <MaterialCommunityIcons name="face-woman-profile" size={32} color="#f43f5e" />
                        );
                    },
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize:focused ? 13 : 10, color: focused ? '#f43f5e' : 'black' }}>
                            Profile
                        </Text>
                    ),
                }}
            />
        </Bottom.Navigator>
    )
}