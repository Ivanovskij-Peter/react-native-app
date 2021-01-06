import React from 'react';
import {StyleSheet,TextInput,View,KeyboardAvoidingView} from 'react-native';

const Input =()=>{
return (
        <TextInput style={styles.input} textAlign='center' placeholder="Search"/>
  
)
};
const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#000000',
        marginHorizontal:40,
        height:40,
        borderRadius:6
    }

})
export default Input;