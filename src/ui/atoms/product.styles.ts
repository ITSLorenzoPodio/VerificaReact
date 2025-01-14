import {Dimensions} from "react-native";
import { StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.9;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 8,
        alignSelf: 'center',  // Add this to center the card
        width: '95%',
    },
    mainContent: {
        width: '100%',
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',  // Add this to ensure image is visible
        backgroundColor: '#f9f9f9',  // Add background to see image container
    },
    contentContainer: {
        padding: 8,
    },
    buttonContainer: {
        padding: 8,
    },
    title: {
        fontSize: 16,
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginBottom: 8,
    },
    button: {
        backgroundColor: 'blue',
        padding: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default styles;