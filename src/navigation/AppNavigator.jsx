import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LogIn from '../screens/LogIn';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import Menu from '../screens/Menu';
import InputDemo from '../components/InputDemo';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs que se van a ver despues de autenticarse
// Aca tendria que ir el historial y las ordenes pendientes.
const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
  </Tab.Navigator>
);

// Stack para el flow donde el usuario no esta verificado todavia
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LogIn" component={LogIn} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);

// Stack que elige entre log in y menu flow
const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth" component={AuthStack} />
    <Stack.Screen name="AppTabs" component={AppTabs} />
  </Stack.Navigator>
);

export default RootStack;