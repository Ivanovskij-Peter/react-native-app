import React from 'react';
import { StyleSheet,  View} from 'react-native';
import ImageGellary from './components/imageGellary/ImageGellary';
import Images from './components/Images';

export default function App() {
  return (
    <View style={styles.container}>
     <ImageGellary/>
     <Images/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginBottom:20,
    flex:1,
    justifyContent:"center",
    backgroundColor: '#fff',
    alignItems:'center'
  },
});
