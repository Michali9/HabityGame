import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import PomodoroTimer from '../components/PomodoroTimer';
import TaskList from '../components/TaskList';

import styles from '../styles/HomeScreenStyles';

export default function HomeScreen() {
  const [username, setUsername] = useState("משתמש");

  const [fontsLoaded] = useFonts({
    'Assistant': require('../../assets/fonts/Assistant-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) return null; 

  return (
    <View style={styles.container}>
      <Text style={[styles.greeting, { fontFamily: 'Assistant' }]}>
        שלום, {username}
      </Text>
      <Text style={[styles.streak, { fontFamily: 'Assistant' }]}>
        רצף של 5 ימים 🔥
      </Text>
     <View style={styles.row}>
      <PomodoroTimer />
      <TaskList />
    </View>
    </View>
  );
}
