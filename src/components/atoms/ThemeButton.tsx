import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type ThemeButton = {
    buttontitle: string;
    onPress: () => void;
  };
  const ThemeButton: React.FC<ThemeButton> = ({ buttontitle, onPress }) => {
    return (
        <TouchableOpacity style={styles.themebutton} activeOpacity={0.7} onPress={onPress}>
          <Text style={styles.buttontitle}>{buttontitle}</Text>
        </TouchableOpacity>
      )
  };
// const ThemeButton = ({buttontitle, onPress}) => {
//   return (
//     <TouchableOpacity style={styles.themebutton} activeOpacity={0.7} onPress={onPress}>
//       <Text style={styles.buttontitle}>{buttontitle}</Text>
//     </TouchableOpacity>
//   )
// }

const styles = StyleSheet.create({
    themebutton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99999,
        paddingBlock: 12,
        paddingInline: 32,
        backgroundColor: 'transparent',
        width:'100%',
        borderColor: '#fff',
        borderWidth: 1,
    },
    buttontitle: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#fff',
    }
})

export default ThemeButton