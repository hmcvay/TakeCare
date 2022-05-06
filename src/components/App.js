import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';
import Home from './Home';
import PostList from './PostList';
import AddPost from './AddPost';
import PostDetails from './PostDetails';

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
          name="AddPost"
          component={AddPost}
          options={{
            title: 'Add post!',
            headerStyle:{
              fontWeight:'bold',
            },
          }}
        />
        <Stack.Screen
          name="PostList"
          component={PostList}
        />
        <Stack.Screen 
          name="PostDetails"
          component={PostDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
