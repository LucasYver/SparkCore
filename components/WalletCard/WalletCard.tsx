import dayjs from 'dayjs';
import React from 'react';
import { View } from 'react-native';

import { fontSize } from '../../constants';
import Card from '../Card';
import { MonoText } from '../StyledText';
import { useThemeColor } from '../Themed';

type WalletCardType = {
  profitability: any;
};

const WalletCard: React.FC<WalletCardType> = ({ profitability }) => {
  const useTheme = useThemeColor();
  return (
    <Card height={75}>
      <View>
        <MonoText style={{ fontSize: fontSize.large }}>
          {dayjs(profitability.date).format('MMMM')}
        </MonoText>
        <MonoText style={{ fontSize: fontSize.small, color: useTheme.grey }}>
          {dayjs(profitability.date).format('YYYY')}
        </MonoText>
      </View>
      <MonoText style={{ fontSize: fontSize.large }}>{profitability.value?.toFixed(2)}€</MonoText>
      <View>
        <MonoText style={{ fontSize: fontSize.large, color: useTheme.green }}>
          {profitability.percent?.toFixed(2)}%
        </MonoText>
        <MonoText style={{ fontSize: fontSize.small, color: useTheme.grey }}>
          {profitability.addedPercent?.toFixed(2)}%
        </MonoText>
      </View>
    </Card>
  );
};

export default WalletCard;
