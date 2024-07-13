import {View} from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.49,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.49,
    date: new Date('2022-01-06'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 15.49,
    date: new Date('2021-01-06'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.49,
    date: new Date('2021-06-06'),
  },
];

interface ExpensesOutputProps {
  expensesPeriod: string;
}

const ExpensesOutput = (props: ExpensesOutputProps) => {
  const {expensesPeriod} = props;
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
