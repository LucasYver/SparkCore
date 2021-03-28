import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { MonoText } from '../components/StyledText';
import { Container } from '../components/Themed';
import TransactionCard from '../components/TransactionCard';
import WalletCard from '../components/WalletCard';
import { fontSize, heightSize } from '../constants';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { decrement, increment } from '../store/reducers/counter';

export default function WalletScreen() {
  const dispatch = useAppDispatch();
  const { value: counter } = useAppSelector((state) => state.counter);
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listHeader}>
          <MonoText style={{ fontSize: fontSize.medium }}>
            Rentabilités ces 3 derniers mois
          </MonoText>
        </View>
        {profitabilities.map((profitability) => (
          <WalletCard profitability={profitability} />
        ))}
        <View style={styles.listHeader}>
          <MonoText style={{ fontSize: fontSize.medium }}>Vos dernières operations</MonoText>
        </View>
        {transactions.map((transaction) => (
          <TransactionCard transaction={transaction} />
        ))}
      </ScrollView>

      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <Text>{counter}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  listHeader: {
    alignSelf: 'flex-start',
    marginBottom: heightSize(10),
    marginTop: heightSize(20),
  },
  separator: {
    marginBottom: heightSize(5),
  },
});

const profitabilities = [
  {
    date: '2021/01/02',
    percent: 8.71,
    addedPercent: 0.75,
    value: 1756.34,
  },
  {
    date: '2021/01/02',
    percent: 8.71,
    addedPercent: 0.75,
    value: 1756.34,
  },
  {
    date: '2021/01/02',
    percent: 8.71,
    addedPercent: 0.75,
    value: 1756.34,
  },
  {
    date: '2021/01/02',
    percent: 8.71,
    addedPercent: 0.75,
    value: 1756.3499,
  },
  {
    date: '2021/01/02',
    percent: 8.71,
    addedPercent: 0.75,
    value: 1756.34,
  },
  {
    date: '2021/01/02',
    percent: 8.71,
    addedPercent: 0.75,
    value: 1756.3499,
  },
];

const transactions = [
  {
    label: 'Dépot banque',
    date: '2021/01/02',
    value: 8.71,
    type: 'deposit',
    state: 'complete',
  },
  {
    label: 'Dépot banque',
    date: '2021/01/02',
    value: 8.71,
    type: 'deposit',
    state: 'en attente',
  },
  {
    label: 'Ré investissement',
    date: '2021/01/02',
    value: 8.71,
    type: 'investment',
  },
  {
    label: 'Ré investissement',
    date: '2021/01/02',
    value: 8.71,
    type: 'investment',
  },
  {
    label: 'Ré investissement',
    date: '2021/01/02',
    value: 8.71,
    type: 'deposit',
    state: 'complete',
  },
];
