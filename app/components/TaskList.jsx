import React, { useState } from 'react';
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import styles from '../styles/taskListStyles';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks(prev => [...prev, { id: Date.now().toString(), text: input, done: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <View style={styles.taskBox}>
      <Text style={styles.title}>משימות</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="הוסיפי משימה"
          style={styles.input}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addTask} 
        />
        {/* <TouchableOpacity style={styles.addButton} onPress={addTask} >
          <Text style={styles.addButtonText}>הוסף משימה</Text>
        </TouchableOpacity> */}
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            
            <Pressable onPress={() => toggleTask(item.id)} style={styles.checkbox}>
              {item.done && <Image source={require('../../assets/images/check.png')} style={styles.checkIcon} />}
            </Pressable>
            <Text style={[styles.taskText, item.done && styles.taskDone]}>
              {item.text}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
