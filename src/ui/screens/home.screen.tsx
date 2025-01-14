import React from 'react';
import {Button} from "react-native";
import {NavigationProp} from '@react-navigation/native';

type HomeScreenProps = {
    navigation: NavigationProp<any>;
};

export const HomeScreen = ({navigation}: HomeScreenProps) => {
    return (
        <Button
            title="Cambio schermata, uso profilo come prova"
            onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
            }
        />
    );
};