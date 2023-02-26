import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductsList from './Screens/Home/ProductsList';
import Home from "./Screens/Home/HomeScreen"
import Login from './Screens/Auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Screens/Auth/Register';
import Ecommerce from './Screens/Home/Ecommerce';
import AddFamily from './Screens/Home/AddFamily';
// import Navigation from './Screens/FooterNav';

export default function App() {
  const Stack = createNativeStackNavigator();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#f43f5e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            options={{
              title: 'My Cycle',
            }} name="Home" component={Ecommerce} />
          <Stack.Screen name="Family" component={AddFamily} />
            

        </Stack.Navigator>
      </NavigationContainer>
  );
}

