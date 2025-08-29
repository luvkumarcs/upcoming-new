import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const InputField = ({inputFieldInfo}) => {
    return (
        <View className='w-full'>
            <TextInput
                style={styles.inputfield}
                placeholder= {inputFieldInfo.placeholder}
                placeholderTextColor= {inputFieldInfo.placeholderColor}
                autoCapitalize= {inputFieldInfo.autoCapitalize}
                autoCorrect= {inputFieldInfo.autoCorrect}
                textContentType= {inputFieldInfo.contentType}
                keyboardType= {inputFieldInfo.keyboardType}
                onChangeText={text => console.log(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputfield: {
        paddingBlock: 16,
        paddingInline: 32,
        borderBottomWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)', // semi-transparent white border
        backgroundColor: 'transparent', // transparent white background
        width: '100%',
        color: 'white',
        fontSize: 14,
        textAlign: 'left',
    }
})

export default InputField