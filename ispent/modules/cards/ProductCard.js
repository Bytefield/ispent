import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

const ProductCard = ({ product, onChangeQuantity, onChangePrice, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.thumbnails }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.display_name}</Text>
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          keyboardType="numeric"
          value={product.quantity.toString()}
          onChangeText={(value) => onChangeQuantity(product._id, value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
          value={product.price.toString()}
          onChangeText={(value) => onChangePrice(product._id, value)}
        />
        <Text style={styles.price}>Total: {(product.quantity * product.price).toFixed(2)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Remove" onPress={() => onRemove(product._id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  buttonContainer: {
    marginLeft: 10,
  },
});

export default ProductCard;