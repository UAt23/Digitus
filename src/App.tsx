import React, { useState } from 'react';
// import styles from './App.scss';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './pages/Onboarding/Onboarding';
import Menu from './pages/Home/Menu';

// const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
    const { isEntered, setEntered } = useState(false);
    if (isEntered) {
        return (
            // <NavigationContainer>
            //     <Stack.Navigator initialRouteName="Onboarding">
            //         <Stack.Screen
            //             name="Onboarding"
            //             component={Onboarding}
            //             options={{ headerShown: false }}
            //         />
            //         <Stack.Screen
            //             name="Home"
            //             component={Menu}
            //             options={{ headerShown: false }}
            //         />
            //     </Stack.Navigator>
            // </NavigationContainer>
            <Onboarding />
        );
    } else {
        return (
            <NavigationContainer>
                <Menu />
            </NavigationContainer>
        );
    }
}

export default App;
