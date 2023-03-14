import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import the ProductCard component to display each product in the cart
import ProductCard from '../../modules/cards/ProductCard';
import Barcode from '../../modules/inputs/Barcode';
import AddProduct from '../../modules/inputs/AddProduct';

export default function Main() {
    const navigation = useNavigation();

    // Add product state > toggle manual input.
    const [showAddProduct, setShowAddProduct] = useState(false);

    // Add product by bar code > toggle scanner
    const [showScanner, setShowScanner] = useState(false);
    const [scannedProduct, setScannedProduct] = useState(null);

    const handleScan = ({ type, data }) => {
        // do something with the scanned data
        setScannedProduct(data);
        setShowScanner(false);
    };

    let productsHardCoded = [
        {
            "display_name":"Medio pollo certificado troceado alimentado con un 50% de ma\u00edz",
            "ean":"8480000100009",
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
    const [products, setProducts] = useState(productsHardCoded);

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
    const renderItem = ({ item }) => (
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
                renderItem={renderItem}
                ListEmptyComponent={<Text>No items yet</Text>}
                keyExtractor={(item) => item.ean}
                contentContainerStyle={styles.productsContainer}
            />
            <Button title="Add Product"
                    onPress={() => navigation.navigate('Home')}
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