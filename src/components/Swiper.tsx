import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import styles from './Screen.scss';

const renderScene = SceneMap({
    first: FirstScreen,
    second: SecondScreen,
    third: ThirdScreen,
});

function Swiper() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' },
    ]);
    return (
        <>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                // pagerStyle={{ display: 'none' }}
                renderTabBar={props => (
                    <TabBar {...props} style={{ display: 'none' }} />
                )}
                initialLayout={{ width: layout.width }}
            />
            <View style={styles.pager}>
                <Text
                    style={[
                        styles.circle,
                        index === 0 ? styles.activeCircle : '',
                    ]}>
                    .
                </Text>
                <Text
                    style={[
                        styles.circle,
                        index === 1 ? styles.activeCircle : '',
                    ]}>
                    .
                </Text>
                <Text
                    style={[
                        styles.circle,
                        index === 2 ? styles.activeCircle : '',
                    ]}>
                    .
                </Text>
            </View>
        </>
    );
}

export default Swiper;
