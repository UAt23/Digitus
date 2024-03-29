import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import styles from './Screen.scss';

function Swiper({ setAppState }: { setAppState: any }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' },
    ]);

    const renderScene = SceneMap({
        first: () => {
            return <FirstScreen setActiveTab={setActiveTab} />;
        },
        second: () => {
            return <SecondScreen setActiveTab={setActiveTab} />;
        },
        third: () => {
            return <ThirdScreen setAppState={setEnterState} />;
        },
    });

    function setActiveTab(index: number) {
        setIndex(index);
    }

    function setEnterState(choice: boolean) {
        setAppState(choice);
    }

    return (
        <>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setActiveTab}
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
