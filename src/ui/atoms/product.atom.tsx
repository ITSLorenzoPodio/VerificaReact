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
    onPress: () => void;
}

const Card = ({ id, title, price, description, image, onPress }: ProductProps) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={onPress}
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
                        {price.toFixed(2)}€
                    </Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {description}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Card;