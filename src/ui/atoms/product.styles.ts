import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 5,
        margin: 10,
        overflow: 'hidden',
    },
    mainContent: {
        width: '100%',
    },
    image: {
        width: '100%',
        height: 150,
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