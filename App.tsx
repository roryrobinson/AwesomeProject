import {GestureHandlerRootView, RectButton} from 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: 'screen',
          }}>
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <Home {...props} username="sports fan" />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
