import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView} from "react-native";
import {NavigationProp} from '@react-navigation/native';
import

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
        <Product
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