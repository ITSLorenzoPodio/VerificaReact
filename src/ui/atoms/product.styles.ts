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
        height: 180,
        resizeMode: 'cover',
    },
    contentContainer: {
        padding: 12,
        backgroundColor: 'white',
    },
    buttonContainer: {
        padding: 12,
        backgroundColor: '#FFF000',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
    },
    title: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 8,
        fontWeight: '500',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4,
    },
    description: {
        fontSize: 12,
        color: '#666666',
        marginBottom: 8,
        lineHeight: 16,
    },
    button: {
        backgroundColor: '#0050AA',
        padding: 12,
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default styles;