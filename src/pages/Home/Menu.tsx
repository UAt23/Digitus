import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen from '../../components/Screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeRouter from './HomeRouter';

const Tab = createBottomTabNavigator();

function Menu() {
    return (
        <Tab.Navigator
            initialRouteName="Digitus"
            screenOptions={() => ({
                headerShown: false,
                headerStyle: {
                    backgroundColor: 'white',
                },
                tabBarShowLabel: false,
                headerTitleAlign: 'center',
                headerTintColor: 'green',
                tabBarStyle: {
                    height: 44,
                    backgroundColor: 'white',
                },
            })}>
            <Tab.Screen
                name="Digitus"
                component={HomeRouter}
                options={{
                    tabBarActiveBackgroundColor: '#048345',
                    tabBarIcon: ({ focused, color }) => {
                        focused ? (color = '#fff') : (color = '#348AA7');
                        return (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={26}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={Screen}
                options={{
                    tabBarActiveBackgroundColor: '#048345',
                    tabBarIcon: ({ focused, color }) => {
                        focused ? (color = '#fff') : (color = '#348AA7');
                        return (
                            <MaterialCommunityIcons
                                name="book-open-page-variant"
                                color={color}
                                size={26}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Today"
                component={Screen}
                options={{
                    tabBarActiveBackgroundColor: '#048345',
                    tabBarIcon: ({ focused, color }) => {
                        focused ? (color = '#fff') : (color = '#348AA7');
                        return (
                            <MaterialCommunityIcons
                                name="account-group"
                                color={color}
                                size={26}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Login"
                component={Screen}
                options={{
                    tabBarActiveBackgroundColor: '#048345',
                    tabBarIcon: ({ focused, color }) => {
                        focused ? (color = '#fff') : (color = '#348AA7');
                        return (
                            <MaterialCommunityIcons
                                name="bell"
                                color={color}
                                size={26}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Other"
                component={Screen}
                options={{
                    tabBarActiveBackgroundColor: '#048345',
                    tabBarIcon: ({ focused, color }) => {
                        focused ? (color = '#fff') : (color = '#348AA7');
                        return (
                            <MaterialCommunityIcons
                                name="menu"
                                color={color}
                                size={26}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default Menu;
