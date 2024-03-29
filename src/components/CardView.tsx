import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const cardData = [
    {
        id: '1',
        title: 'Enim ad minim',
        image: require('../assets/home1.png'),
        date: '21.05.2020',
        likes: '1058',
    },
    {
        id: '2',
        title: 'Enim ad minim',
        image: require('../assets/home2.png'),
        date: '21.05.2024',
        likes: '1348',
    },
];

const CardView = ({
    navigation,
    oneTitle,
}: {
    navigation: any;
    oneTitle: any;
}) => {
    const onPressTitle = () => {
        try {
            navigation.navigate('Detail', {
                subject: oneTitle,
            });
        } catch (error) {
            console.log('error', error);
        }
    };
    return (
        <View style={styles.container}>
            <FlatList
                // scrollEnabled={true}
                indicatorStyle="black"
                data={cardData}
                horizontal={false}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={onPressTitle}>
                        <View style={styles.cardStyle}>
                            <Image
                                style={styles.imageStyle}
                                source={item.image}
                                resizeMode="cover"
                            />
                            <Text style={styles.textTitleStyle}>
                                {' '}
                                {item.title}{' '}
                            </Text>
                            <View style={styles.row}>
                                <TouchableOpacity
                                    onPress={onPressTitle}
                                    style={styles.button}>
                                    <Text style={styles.subtitle}>
                                        Duis aute
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.date}>
                                    <MaterialCommunityIcons
                                        name="calendar-outline"
                                        color="gray"
                                        size={14}
                                    />
                                    {item.date}
                                </Text>
                                <Text style={styles.likes}>
                                    {' '}
                                    {item.likes}
                                    <MaterialCommunityIcons
                                        name="heart-outline"
                                        color="red"
                                        size={14}
                                    />
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    );
};

export default CardView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 0,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        margin: 20,
    },
    imageStyle: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textTitleStyle: {
        padding: 10,
        fontSize: 18,
        color: '#048345',
        lineHeight: 30,
        fontWeight: '400',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
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
    date: {
        fontSize: 12,
        color: '#999',
    },
    likes: {
        fontSize: 12,
        color: 'red',
    },
});
