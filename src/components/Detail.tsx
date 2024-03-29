import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Detail = () => {
    return (
        <View>
            <Image
                style={styles.imageStyle}
                source={require('../assets/images/digitus.png')}
                resizeMode="cover"
            />
            <View></View>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    // onPress={onPressTitle}
                    style={styles.button}>
                    <Text style={styles.subtitle}>Duis aute</Text>
                </TouchableOpacity>
                <Text style={styles.longText}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis rem, quae doloribus nemo pariatur iste ducimus cum
                    neque tempora, fuga esse commodi libero incidunt. At, sit
                    voluptates, praesentium nisi ullam itaque fugit culpa quasi
                    hic provident autem? Neque, facere tenetur consequuntur
                    maxime voluptate quaerat blanditiis sed minus excepturi
                    officia necessitatibus ipsum adipisci iste delectus itaque
                    illum accusamus. Unde iure in, doloribus qui itaque incidunt
                    nulla aut ad quae placeat repudiandae sit quidem officia cum
                    temporibus. Ullam, sit! Magnam ad corporis itaque veniam
                    atque pariatur, earum labore sapiente commodi
                    necessitatibus, quas repellat dolore doloribus voluptate aut
                    minima reprehenderit laborum? Id pariatur totam voluptates
                    aperiam tenetur ea doloribus, quaerat aspernatur unde omnis.
                    Consequatur labore excepturi nulla animi? Velit doloremque
                    veniam ex suscipit.
                </Text>
            </View>
        </View>
    );
};

export default Detail;

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 275,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
    },
    longText: {
        paddingTop: 20,
        color: '#292929',
        fontSize: 13,
        lineHeight: 20,
        fontWeight: '400',
    },
});
