import { View } from 'react-native';
import React from 'react';
import StoryView from './StoryView';
import CardView from './CardView';
// import StoryView from '../components/StoryView';
// import CardView from '../components/CardView';

const Home = ({ navigation }: { navigation: any }) => {
    const item = {};
    return (
        <View style={{ flex: 1 }}>
            <StoryView />
            <CardView oneTitle={item} navigation={navigation} />
        </View>
    );
};

export default Home;
