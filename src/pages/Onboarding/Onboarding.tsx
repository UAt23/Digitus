import React from 'react';
import styles from './Onboarding.scss';
import { Image, View } from 'react-native';
import Swiper from '../../components/Swiper';

function Onboarding({ setState }: { setState: any }) {
    function setAppState(choice: boolean) {
        setState(choice);
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../../assets/images/digitus.png')} />
            </View>
            <Swiper setAppState={setAppState} />
        </View>
    );
}

export default Onboarding;
