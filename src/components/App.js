import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';
import Home from './Home';
import PostList from './PostList';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2980ff',
          },
          headerTintColor: '#d2e6ef',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen 
          name="Home" 
          component={Home}
          // options={{headerShown: false}} 
        />
        <Stack.Screen
          name="PostList"
          component={PostList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
