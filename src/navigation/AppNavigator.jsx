import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InputDemo from '../components/InputDemo';
import LogIn from '../screens/LogIn';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// A modo de prueba.
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="LogIn" component={LogIn} />
    <Stack.Screen name="InputDemo" component={InputDemo} />
    <Stack.Screen name="Register" component={Register}/>
    <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="LogIn" 
      component={LogIn}
      options={{ 
        tabBarLabel: 'LogIn',
        headerShown: false
      }} 
    />
    <Tab.Screen
      name="InputDemo"
      component={InputDemo}
      options={{
        tabBarLabel: 'InputDemo',
        headerShown: false
      }}
    />
  </Tab.Navigator>
);

export default HomeStack;