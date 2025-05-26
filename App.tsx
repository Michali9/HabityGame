import React from "react";
import { Image, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';

import HabitScreen from './app/screens/HabitScreen';
import HomeScreen from './app/screens/HomeScreen';
import TodoScreen from './app/screens/TodoScreen';
import colors from "./app/styles/colors";

const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();
const Tabs = Platform.OS === 'web' ? TopTabs : BottomTabs;
export default function App() {
  return (
    <NavigationContainer>
     <Tabs.Navigator
  screenOptions={{
    headerShown: false,
    tabBarIndicatorStyle: { backgroundColor: 'transparent' }, 
    tabBarLabelStyle: {
      fontSize: 30.4,
      
      fontFamily: 'Assistant', 
    },
    tabBarStyle: {
    backgroundColor: colors.background,
    elevation: 0, // מסיר הצללה באנדרואיד
    shadowOpacity: 0, // מסיר הצללה באייפון
    borderBottomWidth: 0, // מסיר קו תחתון
},
  

  }}
>
<Tabs.Screen
  name="פומודורו"
  component={HomeScreen}
  options={{
    tabBarLabel: () => null, // מבטל את הטקסט הרגיל
    tabBarIcon: () => (
      <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
        <Image
          source={require('./assets/images/pomodoro.png')}
          style={{ width: 50, height: 50, marginRight: 6 }}
        />
        <Text style={{ fontSize: 30.4, fontFamily: 'Assistant' }}>
          פומודורו
        </Text>
      </View>
    ),
  }}
/>
<Tabs.Screen 
  name="משימות"
  component={TodoScreen}
  options={{
    tabBarLabel: () => null, 
    tabBarIcon: () => (
      <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
        <Image
          source={require('./assets/images/Todo.png')}
          style={{ width: 50, height: 50, marginRight: 6 }}
        />
        <Text style={{ fontSize: 30.4, fontFamily: 'Assistant' }}>
          משימות
        </Text>
      </View>
    ),
  }}
  />
  <Tabs.Screen 
  name="הרגלים"
  component={HabitScreen}
  options={{
    tabBarLabel: () => null, 
    tabBarIcon: () => (
      <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
        <Image
          source={require('./assets/images/habit.png')}
          style={{ width: 50, height: 50, marginRight: 6 }}
        />
        <Text style={{ fontSize: 30.4, fontFamily: 'Assistant' }}>
          הרגלים
        </Text>
      </View>
    ),
  }}
  />
 


      </Tabs.Navigator>
      
    </NavigationContainer>
  );
}
