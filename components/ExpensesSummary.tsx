import {View, Text} from 'react-native';
import React from 'react';

interface ExpenseObject {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface ExpensesSummaryProps {
  periodName: string;
  expenses: ExpenseObject[];
}

const ExpensesSummary = (props: ExpensesSummaryProps) => {
  const {periodName, expenses} = props;
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
