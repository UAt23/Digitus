import { Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../components/Home';

const Stack = createNativeStackNavigator();

const HomeRouter = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                animation: 'none',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: 'black',
            }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: () => (
                        <Image
                            style={{ width: 100, height: 60 }}
                            source={require('../../assets/images/digitus.png')}
                            resizeMode="contain"
                        />
                    ),
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name="magnify"
                            color="#348AA7"
                            size={26}
                        />
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name="account-outline"
                            color="#348AA7"
                            size={26}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeRouter;
