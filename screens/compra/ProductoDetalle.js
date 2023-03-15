// screens/ProductDetailScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
    const { barcode } = route.params;
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSave = () => {
        // Save the product data and add it to the products list
        // You may want to implement a context or use a state management library
        // like Redux or MobX to manage the global state of the products list
        console.log('Product data:', {
            barcode,
            quantity,
            price,
        });

        // Then navigate back to the products list screen
        navigation.goBack();
    };

    console.log("barcode", barcode);

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image style={styles.image} source={require('../../assets/image_placeholder.png')} />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('smile!')}>
                        <Text style={styles.buttonText}>FOTO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('scanning!')}>
                        <Text style={styles.buttonText}>CODIGO DE BARRAS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomView}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Producto</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Label 2</Text>
                    <Text style={styles.input}>{barcode}</Text>
                </View>
                <View style={styles.halfInputContainer}>
                    <Text style={styles.label}>Cantidad</Text>
                    <TextInput
                        placeholder="Quantity"
                        keyboardType="number-pad"
                        value={quantity}
                        onChangeText={setQuantity}
                        style={styles.halfInput}
                    />
                    <Text style={styles.label}>Precio</Text>
                    <TextInput
                        placeholder="Price"
                        keyboardType="number-pad"
                        value={price}
                        onChangeText={setPrice}
                        style={styles.halfInput}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>GUARDAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    image: {
        flex:1,
        height: 175,
        marginRight: 10,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff'
    },
    bottomView: {
        paddingHorizontal: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 8,
        height: 40,
    },
    halfInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 8,
        height: 40,
        width: '48%',
    },
});

export default ProductDetailScreen;