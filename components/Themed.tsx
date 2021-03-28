import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { widthSize } from '../constants';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor() {
  const theme = useColorScheme();

  return Colors[theme];
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};
export function Container(props: View['props']) {
  return <View style={[styles.container, props.style]} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: widthSize(4),
  },
});
