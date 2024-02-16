// App.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Text,Button,Icon,TextField} from "app/components"

import Product from './Product';
import { Home } from './Home';
import { Transaction } from './Transaction';
import { Account } from './Account';
import CI from './CI';

const Tab = createBottomTabNavigator();

export default function BT() {
  return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="home" size={25} />
          ),
        }} />


        <Tab.Screen name='Product' component={Product}options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="se" size={25} />
          ),}}/>


        <Tab.Screen name='Transaction' component={Transaction}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="tr" size={30} />
          ),}}/>


        <Tab.Screen name='Account' component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="user" size={25} />
          ),
        }}/>
      </Tab.Navigator>
  );
}
