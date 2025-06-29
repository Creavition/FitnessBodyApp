import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Fitness Egzersizleri' }}
        />
        <Stack.Screen 
          name="Exercise" 
          component={ExerciseScreen} 
          options={{ title: 'Egzersizler' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}