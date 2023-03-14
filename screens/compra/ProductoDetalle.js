import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

// route is key in dat aprovided as apram in navigation from ProductCard.
export default function ProductoDetalle({ route }) {

    if (route.params) {
        const { display_name, qty, price, ean, imageUrl } = route.params
    }

    return (
        <View style={styles.container}>

            <View style={styles.topView}>
                <Image style={styles.image} source={require('../../assets/image_placeholder.png')} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('smile!')}>
                        <Text>Foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('scanning!')}>
                        <Text>Codigo barras</Text>
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
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.halfInputContainer}>
                    <Text style={styles.label}>Cantidad</Text>
                    <TextInput style={styles.halfInput} />
                    <Text style={styles.label}>Precio</Text>
                    <TextInput style={styles.halfInput} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 16,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: '#ddd',
        padding: 8,
        marginVertical: 8,
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