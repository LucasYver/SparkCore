import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { heightSize, widthSize } from '../../constants';
import { useThemeColor } from '../Themed';

type CircleIconType = {
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
};

const CircleIcon: React.FC<CircleIconType> = ({ icon, color }) => {
  const useTheme = useThemeColor();
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <FontAwesome size={widthSize(10)} style={styles.icon} name={icon} color='#fff' />
    </View>
  );
};

export default CircleIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: heightSize(21),
    width: heightSize(21),
    borderRadius: heightSize(21 / 2),
  },
  icon: { marginLeft: 1.5, marginBottom: 1 },
});
