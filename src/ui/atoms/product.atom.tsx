import {Animated, TouchableOpacity, Image, Text} from "react-native";
import styles from './product.styles';
import View = Animated.View;

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

interface ProductProps extends Product {
    onCardPress: () => void;
    onAddProduct: () => void;
}

const Product = ({ id, title, price, description, image, onAddProduct, onCardPress }: ProductProps) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={onCardPress}
                activeOpacity={0.95}
                style={styles.mainContent}
            >
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={styles.price}>
                        ${price.toFixed(2)}
                    </Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {description}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onAddProduct}
                >
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}