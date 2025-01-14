import React from 'react';
import {SafeAreaView, Text} from "react-native";
import {NavigationProp, RouteProp} from '@react-navigation/native';

type ProfileScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<any, any>;
};

export const SettingsScreen = ({route}: ProfileScreenProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Nome: {route.params?.name}</Text>;
        </SafeAreaView>
    )};