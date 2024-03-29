import React from 'react';
import styles from './Onboarding.scss';
import { Image, View } from 'react-native';
import Swiper from '../../components/Swiper';

function Onboarding() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    // eslint-disable-next-line react-native/no-inline-styles
                    source={require('./digitus.png')}
                />
            </View>
            <Swiper />
        </View>
    );
}

export default Onboarding;
