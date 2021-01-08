import React, { useState } from 'react';
import { FlatList, View, Image, Text, TouchableWithoutFeedback, Modal, Button } from 'react-native';


const ImageGellary=({data})=>{
const [openModal, setOpenModal] = useState(false);
const [largeImageUrl,setLargeImageUrl]=useState('');

const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => { setOpenModal(true); setLargeImageUrl(item.urls.regular)}}>
        <View style={{marginBottom:10}}>
            <Image source={{uri:item.urls.small}} style = {{ width: 365, height: 320}}/>
            <Text style={{textAlign:'center'}}>{item.user.name}</Text>
            <Text style={{textAlign:'center'}}>{item.alt_description}</Text>      
        </View>
    </TouchableWithoutFeedback> 
  );

    return(
        <>
        <FlatList data={data} keyExtractor={item=>item.id} renderItem={renderItem}/>
        <Modal visible={openModal} 
        animationType={"slide"}
        transparent={false}>
            <View style={{flex:1,alignItems:'center',justifyContent:"center",}}>
            <Image source={{uri:largeImageUrl}} style = {{ width: 400, height: 600, }} />
            <Button onPress={()=>{setOpenModal(false)}} title='Close'/>
            </View>
        </Modal>
        </>
    )
}
export default ImageGellary;