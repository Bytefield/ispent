import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008000'
  }
});

export default function ItemsScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://localhost:5000/products');
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.title}>{item.display_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} €</Text>
      </TouchableOpacity>
    );
  };

    return (
        <View style={styles.container}>
            <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item._id} />
            <Button
                title="Go back to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}