import React from 'react';
import { StyleSheet, View } from 'react-native';

import { fontSize, heightSize, widthSize } from '../../constants';
import { MonoText } from '../StyledText';
import { useThemeColor } from '../Themed';

const WalletSummary: React.FC = () => {
  const useTheme = useThemeColor();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={[styles.card, { backgroundColor: useTheme.burgundy, width: '76%' }]}>
            <MonoText style={{ color: '#fff', opacity: 0.6 }}>FIAT</MonoText>
          </View>
          <View style={[styles.card, { backgroundColor: useTheme.orange, width: '23%' }]}>
            <MonoText style={{ color: '#fff', opacity: 0.6, textAlign: 'right' }}>R.O.I</MonoText>
          </View>
        </View>
        <View style={[styles.sumaryContainer, { backgroundColor: useTheme.card }]}>
          <MonoText style={{ fontSize: fontSize.large, color: useTheme.summaryTitle }}>
            SparkCore Wallet
          </MonoText>
          <MonoText style={{ fontSize: fontSize.xxxlarge }}>7 500,00 €</MonoText>
        </View>
      </View>
      <View style={styles.footer}>
        <MonoText style={{ fontSize: fontSize.medium, color: useTheme.grey }}>7 000,00 €</MonoText>
        <MonoText style={{ fontSize: fontSize.medium, color: useTheme.grey }}>500,00 €</MonoText>
      </View>
    </View>
  );
};

export default WalletSummary;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthSize(370),
  },
  card: {
    height: heightSize(136),
    paddingHorizontal: widthSize(10),
    paddingVertical: widthSize(5),
    borderRadius: heightSize(5),
  },
  sumaryContainer: {
    position: 'absolute',
    width: widthSize(256),
    height: heightSize(98),
    borderRadius: heightSize(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: heightSize(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
