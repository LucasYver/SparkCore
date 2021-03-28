import * as React from 'react';
import { Text } from 'react-native';

import { useThemeColor } from './Themed';

export function MonoText(props: Text['props']) {
  const useTheme = useThemeColor();
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[{ fontFamily: 'space-mono', color: useTheme.text }, props.style]}
    />
  );
}
