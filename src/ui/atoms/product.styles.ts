import {Dimensions} from "react-native";
import { StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.9;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
        width: cardWidth,
        overflow: 'hidden',
    },
    mainContent: {
        width: '100%',
    },
    image: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        padding: 16,
        paddingBottom: 8, // Reduced to accommodate button
    },
    buttonContainer: {
        padding: 16,
        paddingTop: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: '700',
        color: '#2196F3',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
        lineHeight: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default styles;