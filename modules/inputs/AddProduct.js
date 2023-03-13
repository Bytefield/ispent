import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AddProduct({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = () => {
    const newProduct = { name, price: Number(price), quantity: Number(quantity) };
    addProduct(newProduct);
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} />
      <TextInput placeholder="Quantity" value={quantity} onChangeText={setQuantity} />
      <Button title="Add Product" onPress={handleSubmit} />
    </View>
  );
}
