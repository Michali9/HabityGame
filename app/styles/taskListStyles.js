import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  taskBox: {
    width: '40%', 
    marginLeft: 60,
    marginBottom: 20,
    maxHeight: 420,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: colors.borderColor,
    borderRadius: 20,
    padding: 20,
    margin: 10,
    overflow: 'visible',
    
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Assistant',
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 15,
  },
  inputRow: {
    backgroundColor: '#E4EFFF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    color: '#5f8bcb',
    fontSize: 16,
    fontFamily: 'Assistant',
    textAlign: 'right',
  },
  addButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    
  },
  addButtonText: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: 'Assistant',
  },
  taskRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
    position: 'relative',

    
  },
  taskText: {
    fontSize: 18,
    fontFamily: 'Assistant',
    color: 'black',
    textAlign: 'right',
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: colors.gray,
  },
checkbox: {
  width: 24,
  height: 24,
  borderWidth: 2,
  borderColor: colors.borderColor,
  borderRadius: 6,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'visible', // חשוב כדי לא לחתוך את הוי
  backgroundColor: 'white', // כדי שהעיגול יהיה נקי מאחור
},

checkIcon: {
  width: 35,
  height: 35,
  tintColor: colors.textLight,
  marginTop: -6,      // מרים את הוי החוצה
  marginRight: -4,    // מזיז אותו טיפה הצידה
  zIndex: 10,
}
,
});

export default styles;
