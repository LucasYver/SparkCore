import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const ratio = width / height;

const baseWidth = 380;
const baseHeight = baseWidth / ratio;

export const widthSize = (size: number) => Math.round((width / baseWidth) * size);
export const heightSize = (size: number) => Math.round((height / baseHeight) * size);

export const fontSize = {
  small: heightSize(12),
  medium: heightSize(14),
  large: heightSize(17),
};
