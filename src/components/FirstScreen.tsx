import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './Screen.scss';
import { SCREEN_CONTENT } from '../constants/onboarding.model';

function FirstScreen() {
    return (
        <View style={styles.wrapper}>
            <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={styles.image}
                source={require('../assets/images/first_slide.png')}
            />
            <View style={styles.contentWrapper}>
                <Text style={styles.header}>
                    {SCREEN_CONTENT.firstScreen.title}
                </Text>
                <Text style={styles.text}>
                    {SCREEN_CONTENT.firstScreen.text}
                </Text>
            </View>
            <View style={styles.bottomNavigationWrapper}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>
                        {SCREEN_CONTENT.firstScreen.buttonText}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default FirstScreen;
