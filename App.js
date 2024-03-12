import { useFonts } from 'expo-font';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { UserProvider } from './contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  Home,
  Search,
  Profile,
  Login,
  Signup,
  Resources,
  FrontPage
} from './screens/index';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    regular:require("./assets/fonts/Poppins-Regular.ttf"),
    light:require("./assets/fonts/Poppins-Light.ttf"),
    bold:require("./assets/fonts/Poppins-Bold.ttf"),
    medium:require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold:require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold:require("./assets/fonts/Poppins-SemiBold.ttf"),


  })
  if (!loaded) {
    return null;
  }
  //initialRouteName='FrontPage'
  return (
    <UserProvider>
      <StatusBar backgroundColor='#4d8076' style='light' />
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen 
          name="BottomTabNavigation" 
          component={BottomTabNavigation}
          options={{headerShown:false }}
        /> 
        <Stack.Screen 
          name="FrontPage"
          component={FrontPage}
          options={{headerShown:false }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{headerShown:false }}
        /> 
        <Stack.Screen 
          name="Search" 
          component={Search}
          options={{headerShown:false }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile}
          options={{headerShown:false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{headerShown:false }}
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup}
          options={{headerShown:false }}
        />
        <Stack.Screen 
          name="Resources" 
          component={Resources}
          options={{headerShown:false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  </UserProvider>
  
  );
}
