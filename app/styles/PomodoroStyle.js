import { StyleSheet } from 'react-native';
import colors from './colors';

const PomodoroStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 30,
  },
  timer: {
    fontSize: 65,
    fontWeight: '400',
    fontFamily: 'Assistant',
    color: colors.textLight,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
    marginTop: 20,
    gap: 10, // אם לא נתמך: תשתמשי ב-marginLeft במקום
  },
  button: {
    backgroundColor: "#add4fe",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Assistant',
  },
});

export default PomodoroStyles;
