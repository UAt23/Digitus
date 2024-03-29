import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './Screen.scss';
import { SCREEN_CONTENT } from '../constants/onboarding.model';

function ThirdScreen({ setAppState }: { setAppState: any }) {
    function enterTheApp(choice: boolean) {
        setAppState(choice);
    }
    return (
        <View style={styles.wrapper}>
            <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={styles.image}
                source={require('../assets/images/third_slide.png')}
            />
            <View style={styles.contentWrapper}>
                <Text style={styles.header}>
                    {SCREEN_CONTENT.thirdScreen.title}
                </Text>
                <Text style={styles.text}>
                    {SCREEN_CONTENT.thirdScreen.text}
                </Text>
            </View>
            <View style={styles.bottomNavigationWrapper}>
                <Pressable
                    style={styles.button}
                    onPress={() => enterTheApp(true)}>
                    <Text style={styles.buttonText}>
                        {SCREEN_CONTENT.thirdScreen.buttonText}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default ThirdScreen;
