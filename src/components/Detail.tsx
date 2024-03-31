import {
    Animated,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';

const Detail = ({route}: {route: any}) => {
    const { index } = route.params;
    const [scrollY] = useState(new Animated.Value(0));
    const headerHeight = scrollY.interpolate({
        inputRange: [0, 400],
        outputRange: [400, 100],
        extrapolate: 'clamp',
    });
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false },
                )}
                scrollEventThrottle={16}>
                <View style={styles.textContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.subtitle}>Duis aute</Text>
                    </TouchableOpacity>
                    <Text style={styles.longText}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nobis rem, quae doloribus nemo pariatur iste
                        ducimus cum neque tempora, fuga esse commodi libero
                        incidunt. At, sit voluptates, praesentium nisi ullam
                        itaque fugit culpa quasi hic provident autem? Neque,
                        facere tenetur consequuntur maxime voluptate quaerat
                        blanditiis sed minus excepturi officia necessitatibus
                        ipsum adipisci iste delectus itaque illum accusamus.
                        Unde iure in, doloribus qui itaque incidunt nulla aut ad
                        quae placeat repudiandae sit quidem officia cum
                        temporibus. Ullam, sit! Magnam ad corporis itaque veniam
                        atque pariatur, earum labore sapiente commodi
                        necessitatibus, quas repellat dolore doloribus voluptate
                        aut minima reprehenderit laborum? Id pariatur totam
                        voluptates aperiam tenetur ea doloribus, quaerat
                        aspernatur unde omnis. Consequatur labore excepturi
                        nulla animi? Velit doloremque veniam ex suscipit.
                    </Text>
                </View>
            </ScrollView>

            <Animated.View
                style={[styles.animatedView, { height: headerHeight }]}>
                <ImageBackground
                    source={{
                        uri: 'https://source.unsplash.com/random/200x300?' + index
                    }}
                    style={styles.imageStyle}></ImageBackground>
            </Animated.View>
        </View>
    );
};

export default Detail;

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
    },
    textStyle: {
        color: 'black',
    },
    button: {
        width: 110,
        height: 20,
        backgroundColor: '#fff',
        borderColor: '#B9CBC0',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 12,
        lineHeight: 14,
        color: '#0A8754',
    },
    textContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#FFFFFF',
        padding: 25,
        marginTop: 350,
        height: 500,
    },
    longText: {
        paddingTop: 20,
        color: '#292929',
        fontSize: 13,
        lineHeight: 20,
        fontWeight: '400',
    },
    animatedView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -10,
    },
});
