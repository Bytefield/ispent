import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function AdminScreen() {
  const [productName, setProductName] = useState('');
  const fileInputRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', fileInputRef.current.files[0]);
    axios.post('https://localhost:5000/upload_products', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Admin Screen</Text>
      <TextInput
        placeholder="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <form onSubmit={handleFormSubmit}>
        <input type="file" ref={fileInputRef} />
        <button type="submit">Upload</button>
      </form>
    </View>
  );
}