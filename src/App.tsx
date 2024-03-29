import React, { useState } from 'react';
// import styles from './App.scss';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './pages/Onboarding/Onboarding';
import Menu from './pages/Home/Menu';

// const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
    const [isEntered, setEntered] = useState(false);

    function setAppState(choice: boolean) {
        setEntered(choice);
    }

    if (!isEntered) {
        return <Onboarding setState={setAppState} />;
    } else {
        return (
            <NavigationContainer>
                <Menu />
            </NavigationContainer>
        );
    }
}

export default App;
