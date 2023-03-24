import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-web';

function MyScreen({ route }) {

    const [cuentas, setCuentas] = useState([]);

    // console.log(route.params)

    const fetchObject = async () => {
        try {
            // Get the id from the route params
            const { itemId } = route.params;

            // Get the object from AsyncStorage by its id
            const object = await getObjectById(itemId);

            // Set the retrieved object to state
            setCuentas(object.eventos);
        } catch (error) {
            console.log('Error fetching object:', error);
        }
    };

    useEffect(() => {
        fetchObject();
    }, [route.params]);

    const getObjectById = async (id) => {

        try {
            // Get the entire array of objects from AsyncStorage
            const jsonValue = await AsyncStorage.getItem('items');
            if (jsonValue === null) {
                return null;
            }

            // Parse the JSON string into a JavaScript array
            const dataArray = JSON.parse(jsonValue);

            console.log(dataArray);

            // Find the object with the matching id property
            const matchingObject = dataArray.find((object) => object.id === id);

            // Return the matching object, or null if no match was found
            return matchingObject || null;
        } catch (error) {
            console.log('Error getting object by id:', error);
            return null;
        }
    };

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.nombre}</Text>
                <Text>{item.fecha}</Text>
                <Text>{item.cantidad}</Text>
            </View>
        );
    };

    const renderEmptyState = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text>No tiene movimientos aun...</Text>
            </View>
        );
    };

    const handleAgregarMovimiento = (item) => {
        // let newCuenta = {
        //     "nombre": item.nombre,
        //     "fecha": item.fecha,
        //     "cantidad": item.cantidad
        // }

        // setCuentas(...cuentas, newCuenta);
        console.log('agregar movimiento')
    }

    return (
        <View>
            {cuentas ? (
                <View>
                    <FlatList
                        data={cuentas}
                        renderItem={renderItem}
                        ListEmptyComponent={renderEmptyState}
                    />
                    <TouchableOpacity
                        onPress={handleAgregarMovimiento}
                        style={styles.button}
                    >
                        <Text>Agregar movimiento</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });

export default MyScreen;
