import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen'
import SecondScreen from './SecondScreen'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: 'Second',
            headerTitle: 'Second',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default gestureHandlerRootHOC(App);