import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        backgroundColor: '#d35400'
    },
    input: {
        height: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    buttonContainer: {
        backgroundColor: '#c0392b',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
    },
});