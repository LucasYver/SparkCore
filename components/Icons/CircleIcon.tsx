import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { heightSize } from '../../constants';
import { useThemeColor } from '../Themed';

type CircleIconType = {
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
};

const CircleIcon: React.FC<CircleIconType> = ({ icon, color }) => {
  const useTheme = useThemeColor();
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <FontAwesome size={heightSize(11)} style={styles.icon} name={icon} color='#fff' />
    </View>
  );
};

export default CircleIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: heightSize(22),
    width: heightSize(22),
    borderRadius: heightSize(22) / 2,
  },
  icon: { marginLeft: heightSize(2), marginBottom: heightSize(1) },
});
