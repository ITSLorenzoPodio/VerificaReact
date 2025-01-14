import React from 'react';
import {Text} from "react-native";
import {NavigationProp, RouteProp} from '@react-navigation/native';

type ProfileScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<any, any>;
};

export const ProfileScreen = ({route}: ProfileScreenProps) => {
    return <Text>Nome: {route.params?.name}</Text>;
};