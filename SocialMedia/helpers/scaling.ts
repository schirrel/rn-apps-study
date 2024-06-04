import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();
const isMedium = width <= 410 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 333;
  }
  return 350;
};

export const horizontalScale = (size: number) => {
  const ratio = width / guidelineBaseWidth();
  return size * ratio;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (isMedium) {
    return 620;
  }
  return 680;
};

export const verticalScale = (size: number) => {
  const ratio = height / guidelineBaseHeight();
  return size * ratio;
};

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

export const scaleFontSize = (size: number) =>
  Math.round((width / guidelineBaseFonts()) * size);
