import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Story = {
    id: string;
    title: string;
    image: any;
};

const storyData: Story[] = [
    {
        id: '1',
        title: 'Günün\nMenüsü',
        image: require('../assets/story1.png'),
    },
    {
        id: '2',
        title: 'Bayram\nKutlaması',
        image: require('../assets/story2.png'),
    },
    {
        id: '3',
        title: 'Digitus\nAnket',
        image: require('../assets/story3.png'),
    },
    {
        id: '4',
        title: 'Duyuru ve\nGenelgeler',
        image: require('../assets/story4.png'),
    },
    {
        id: '5',
        title: 'Bugün\nDoğanlar',
        image: require('../assets/story5.png'),
    },
    {
        id: '6',
        title: 'Aramıza\nKatılanlar',
        image: require('../assets/story6.png'),
    },
];

const StoryView = () => {
    // const [data, setData] = useState<Story[]>([]);
    return (
        <View style={styles.viewStyle}>
            <FlatList
                indicatorStyle="black"
                data={storyData}
                horizontal={true}
                renderItem={({ item }) => (
                    <View style={styles.renderItemStyle}>
                        <View style={styles.outerCircle}>
                            <View style={styles.innerCircle}>
                                <Image
                                    style={styles.imageStyle}
                                    source={item.image}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <Text style={styles.textStyle}> {item.title} </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default StoryView;

const styles = StyleSheet.create({
    viewStyle: {
        height: 110,
        backgroundColor: 'white',
        borderBottomColor: '#999EB9',
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#348AA7',
    },
    textStyle: {
        color: '#999EB9',
        textAlign: 'center',
        fontSize: 11,
    },
    renderItemStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    outerCircle: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#2A9D8F',
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        borderRadius: 90,
        overflow: 'hidden',
    },
});
