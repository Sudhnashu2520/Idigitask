// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screen/MainScreen';
import Component1 from './screen/Component1';
import Component2 from './screen/Component2';

const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="Component1" component={Component1} />
        <Stack.Screen name="Mainscreen" component={MainScreen} />
        <Stack.Screen name="Component2" component={Component2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
