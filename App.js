/* call react libraries */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import Details from './src/views/detailspokemon';
import pokemon from './src/views/pokemon';
import MyNavigator from './src/components/navBar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerBackVisible: false}}>
    <Stack.Screen
      name="pokemon"
      component={pokemon}
      options={{
      headerTitle: props => (
        <MyNavigator navigation={undefined} {...props} />
      ),
      }}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
      headerTitle: props => (
        <MyNavigator navigation={undefined} {...props} />
      ),
      }}
    />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
