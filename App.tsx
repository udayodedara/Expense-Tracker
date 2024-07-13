import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import ManageExpense from './screens/manage_expense/ManageExpense';
import RecentExpense from './screens/recent_expense/RecentExpense';
import AllExpenses from './screens/all_expenses/AllExpenses';
import {GlobalStyles} from './constants/styles';
import {Images} from './assets/images';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}>
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color}) => (
            <View style={styles.imageContainerStyle}>
              <Image
                style={styles.imageStyle}
                tintColor={color}
                source={Images.hourGlass}
              />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color}) => (
            <View style={styles.imageContainerStyle}>
              <Image
                style={styles.imageStyle}
                tintColor={color}
                source={Images.calendar}
              />
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  imageContainerStyle: {
    height: 20,
    width: 20,
  },
});
