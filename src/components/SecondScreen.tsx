import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './Screen.scss';
import { SCREEN_CONTENT } from '../constants/onboarding.model';

function SecondScreen({ setActiveTab }: { setActiveTab: any }) {
    return (
        <View style={styles.wrapper}>
            <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={styles.image}
                source={require('../assets/images/second_slide.png')}
            />
            <View style={styles.contentWrapper}>
                <Text style={styles.header}>
                    {SCREEN_CONTENT.secondScreen.title}
                </Text>
                <Text style={styles.text}>
                    {SCREEN_CONTENT.secondScreen.text}
                </Text>
            </View>
            <View style={styles.bottomNavigationWrapper}>
                <Pressable
                    style={styles.button}
                    onPress={() => setActiveTab(2)}>
                    <Text style={styles.buttonText}>
                        {SCREEN_CONTENT.secondScreen.buttonText}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default SecondScreen;
