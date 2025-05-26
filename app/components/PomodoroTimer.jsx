import { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from '../styles/PomodoroStyle';
import colors from '../styles/colors';

export default function PomodoroTimer(){
    const [secondsLeft, setSecondsLeft] = useState(25*60);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(()=>{
        if(isRunning){
            intervalRef.current = setInterval(()=>{
                setSecondsLeft((prev)=>{
                    if (prev === 0)
                    {
                        clearInterval(intervalRef.current);
                        return 0;
                    }
                     return prev - 1;
                });
            }, 1000)
        } else{
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    },[isRunning]);

    const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSecondsLeft(25 * 60);
    setIsRunning(false);
  };

    const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

   return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={250}
        width={8}
        fill={(secondsLeft / (25 * 60)) * 100}
        tintColor={colors.textLight}
        backgroundColor={colors.textLight}
      >
        {() => (
          <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
        )}
      </AnimatedCircularProgress>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setIsRunning(true)}>
          <Text style={styles.buttonText}>התחל</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>אפס</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
