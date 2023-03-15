import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import the ProductCard component to display each product in the cart
import ProductCard from '../../modules/cards/ProductCard';

export default function Main() {
    const navigation = useNavigation();

    let productsHardCoded = [
        {
            "relative_id": {
                "mercadona": ""
            },
            "allergens": "",
            "brand": "",
            "description": "",
            "display_name":"Medio pollo certificado troceado alimentado con un 50% de ma\u00edz",
            "ean":"8480000100009",
            "ingredients": "",
            "thumbnail": "url",
            "qty": 2,
            "price": 25
        },
        {
            "display_name":"Chocolate líquido a la taza Hacendado",
            "ean":"8480000100054",
            "qty": 3,
            "price": 10
        },
    ];

    // State to keep track of the scanned or manually added products in the cart
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useState([]);

    // Function to add a new product to the cart
    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    // Function to remove a product from the cart
    const handleRemoveProduct = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
    };

    // Function to update the quantity or price of a product in the cart
    const handleUpdateProduct = (index, key, value) => {
        const newProducts = [...products];
        newProducts[index][key] = value;
        setProducts(newProducts);
    };

    // Render each product in the cart as a ProductCard component
    const renderProduct = ({ item }) => (
        <ProductCard
            product={item}
            index={item.ean}
            handleRemoveProduct={handleRemoveProduct}
            handleUpdateProduct={handleUpdateProduct}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                ListEmptyComponent={<Text>Nada agregado todavia</Text>}
                keyExtractor={(product) => product.ean}
                contentContainerStyle={styles.productsContainer}
            />
            <Button title="Add Product"
                    onPress={() => navigation.navigate('Scan')}
            />
        </View>
    );
};

// Style sheet for the CartScreen component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    addButton: {
        backgroundColor: '#4caf50',
        padding: 10,
        borderRadius: 5,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    scanButton: {
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 5,
    },
    scanButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    productsContainer: {
        flexGrow: 1,
        padding: 10,
    },
});