import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView} from "react-native";
import {NavigationProp} from '@react-navigation/native';
import Card from '../atoms/product.atom'

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

type HomeScreenProps = {
    navigation: NavigationProp<any>;
};

export const HomeScreen = ({navigation}: HomeScreenProps) => {
    const [products, setProducts] = useState<Product[]>([]);

    // useCallback //

    // useEffect //

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json));
    }, []);

    const renderProduct = ({item}: {item: Product}) => (
        <Card
            {...item}
            onCardPress={() => navigation.navigate('ProductDetails', {product: item})}
            onAddToCart={() => console.log('Adding to cart:', item.id)}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};
};