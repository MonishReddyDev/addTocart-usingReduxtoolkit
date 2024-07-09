import React from 'react';
import ShoppingItems from '../screens/shoppingItems';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShowCartItem from '../screens/showCartItems';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShoppingItems">
        <Stack.Screen name="ShoppingItems" component={ShoppingItems} />
        <Stack.Screen name="Cart" component={ShowCartItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
