import { DefaultTheme } from '@react-navigation/native';

import { primaryLight } from '../constants/Colors';

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: primaryLight,
  },
};
