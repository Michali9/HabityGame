import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 20,
        paddingTop: 3,
       
    },
    greeting: {
        fontSize: 40,
        color: colors.textDark,
        backgroundColor: colors.primary,
        fontWeight: '600',
        textAlign: 'center',
    },
    streak: {
        fontSize: 34.2,
        textAlign: 'center',
    }
});

export default styles;