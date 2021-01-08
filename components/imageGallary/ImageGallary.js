import React, { useState } from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';

const ImageGallary = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const renderItem = ({ item }) => {
    const handleModal = () => {
      setOpenModal(true);
      setLargeImageUrl(item.urls.regular);
    };
    <TouchableWithoutFeedback
      onPress={() => {
        handleModal();
      }}
    >
      <View style={styles.container}>
        <Image source={{ uri: item.urls.small }} style={styles.image} />
        <Text style={styles.text}>{item.user.name}</Text>
        <Text style={styles.text}>{item.alt_description}</Text>
      </View>
    </TouchableWithoutFeedback>;
  };
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Modal visible={openModal} animationType={'slide'} transparent={false}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: largeImageUrl }} style={styles.modalImage} />
          <Button
            onPress={() => {
              setOpenModal(false);
            }}
            title="Close"
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    width: 365,
    height: 320,
  },
  text: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width: 400,
    height: 600,
  },
});
export default ImageGallary;
