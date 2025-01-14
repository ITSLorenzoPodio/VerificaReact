import React from 'react';
import {Button, SafeAreaView} from "react-native";
import {NavigationProp} from '@react-navigation/native';

type HomeScreenProps = {
    navigation: NavigationProp<any>;
};

export const HomeScreen = ({navigation}: HomeScreenProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Button
                title="Cambio schermata, uso profilo come prova"
                onPress={() =>
                    navigation.navigate('Profile', {name: 'Jane'})
                }
            />
        </SafeAreaView>
    );
};