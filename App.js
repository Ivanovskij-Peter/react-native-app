import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView} from 'react-native';
import Input from './components/searchForm/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
     <Input style={styles.textForm}/>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex:1,
    justifyContent:'flex-start',
    backgroundColor: '#fff',
  },
});
