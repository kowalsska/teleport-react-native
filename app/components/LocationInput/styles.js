import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
    input: {
        position: "absolute",
        top: 30,
        padding: 5,
        height: 40,
        width: Dimensions.get("window").width,
        borderColor: 'gray',
        borderWidth: 1,
        fontFamily: 'BebasNeueRegular',
    },
});