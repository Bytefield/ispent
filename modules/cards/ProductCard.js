import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function ProductCard ({product:{display_name, qty, price}}, onRemove)  {

  // const { product:{ display_name, qty, price } } = item;
  const totalPrice = qty * price;

  const openDetail = () => console.log('open detail');
  const handleRemove = () => console.log('remove item');

  return (
    <TouchableOpacity onPress={openDetail}>
      <View style={styles.card}>
        <Text style={styles.title}>{display_name}</Text>
        <Text style={styles.qty}>Cantidad: {qty || 0}</Text>
        <Text style={styles.price}>Precio: {price || 0}</Text>
        <Text style={styles.totalPrice}>Total: {totalPrice}</Text>
        <TouchableOpacity onPress={handleRemove} style={styles.button} hitSlop={styles.hitSlop}>
          <Text style={styles.buttonText}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qty: {
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    marginTop: 8,
  },
  totalPrice: {
    fontSize: 16,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#f44336',
    borderRadius: 4,
    padding: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  hitSlop: {
    top: -15,
    right: -15,
    bottom: -15,
    left: -15,
  },
});