import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import the ProductCard component to display each product in the cart
import ProductCard from '../modules/cards/ProductCard';
import Barcode from '../modules/inputs/Barcode';
import AddProduct from '../modules/inputs/AddProduct';

export default function CartScreen() {
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

    // State to keep track of the scanned or manually added products in the cart
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
    const renderItem = ({ item, index }) => (
        <ProductCard
            product={item}
            index={index}
            handleRemoveProduct={handleRemoveProduct}
            handleUpdateProduct={handleUpdateProduct}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Button title="Add Product"
                        onPress={() => setShowAddProduct(true)}
                />
                {showAddProduct && (
                    <AddProduct
                        addProductToList={(name, quantity, price) => {
                            setProductList([...productList, { name, quantity, price }]);
                            setShowAddProduct(false);
                        }}
                    />
                )}
                <Button
                    title={showScanner ? 'Cancel' : 'Scan Barcode'}
                    onPress={() => setShowScanner(!showScanner)}
                />
            </View>
            {showScanner && (
                <Barcode onBarCodeScanned={handleScan} style={{ flex: 1 }} />
            )}

            {scannedProduct && (
                <View style={styles.productCard}>
                    <Card>
                        <Card.Title>{scannedProduct}</Card.Title>
                        <Input placeholder="Quantity" keyboardType="numeric" />
                        <Input placeholder="Price" keyboardType="numeric" />
                        <Button title="Remove" onPress={() => setScannedProduct(null)} />
                    </Card>
                </View>
            )}
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.ean}
                contentContainerStyle={styles.productsContainer}
            />

            <Button
                title="Go back home"
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