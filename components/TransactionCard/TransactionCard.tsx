import dayjs from 'dayjs';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { fontSize, widthSize } from '../../constants';
import Card from '../Card';
import { CircleIcon } from '../Icons';
import { MonoText } from '../StyledText';
import { useThemeColor } from '../Themed';

type TransactionCardType = {
  transaction: any;
};

const TransactionCard: React.FC<TransactionCardType> = ({ transaction }) => {
  const useTheme = useThemeColor();
  return (
    <Card height={75}>
      <View style={styles.firstContainer}>
        <CircleIcon color={useTheme.burgundy} icon='university' />
        <View style={{ marginLeft: widthSize(30) }}>
          <MonoText numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: fontSize.medium }}>
            {transaction.label}
          </MonoText>
          <MonoText style={{ fontSize: fontSize.medium, color: useTheme.grey }}>
            {transaction.value?.toFixed(2)} €
          </MonoText>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <MonoText style={{ fontSize: fontSize.medium }}>
          {dayjs(transaction.date).format('D MMM YYYY')}
        </MonoText>
        <MonoText style={{ fontSize: fontSize.medium, color: useTheme.grey, textAlign: 'right' }}>
          {transaction.state}
        </MonoText>
      </View>
    </Card>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  secondContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
