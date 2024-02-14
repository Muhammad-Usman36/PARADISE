// App.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Product from './Product';
import Account from './Account';
import { Home } from './Home';
import { Transaction } from './Transaction';

const Tab = createBottomTabNavigator();

export default function BT() {
  return (
    <NavigationContainer  independent={true}>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name='Product' component={Product}/>
        <Tab.Screen name='Transaction' component={Transaction}/>
        <Tab.Screen name='Account' component={Account}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
