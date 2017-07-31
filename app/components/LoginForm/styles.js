import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        backgroundColor: '#F2F4F4'
    },
    input: {
        height: 30,
        backgroundColor: 'rgba(13, 171, 164, 0.4)',
        marginBottom: 10,
        textAlign: 'center',
        color: '#FFF',
        paddingHorizontal: 40,
        paddingVertical: 5,
        fontFamily: 'BebasNeueRegular',
    },
    buttonContainer: {
        backgroundColor: '#0DABA4',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'BebasNeueRegular',
    },
});