import React from 'react';
import {FlatList, Text} from 'react-native';

interface ExpenseObject {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface ExpensesListProps {
  expenses: ExpenseObject[];
}

const renderExpenseItem = (item: ExpenseObject) => {
  return <Text>{item.description}</Text>;
};

const ExpensesList = (props: ExpensesListProps) => {
  const {expenses} = props;
  return <FlatList data={expenses} renderItem={renderExpenseItem} />;
};

export default ExpensesList;
