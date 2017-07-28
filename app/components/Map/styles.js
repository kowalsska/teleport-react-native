import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  map: {
    top: 0,
    left: 0,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});