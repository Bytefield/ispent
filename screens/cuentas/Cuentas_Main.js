import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onSaveItem } from '../../helpers/helpers';

const Cuentas_Main = ({ navigation }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItemsFromStorage();
    }, []);

    const getItemsFromStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('items');
            const storedItems = jsonValue != null ? JSON.parse(jsonValue) : [];
            setItems(storedItems);
        } catch (e) {
            console.error('Error getting items from storage: ', e);
        }
    };

    const handleSaveItem = async (item) => {
        onSaveItem(item, setItems);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Cuentas_Items', { itemId: item.id })}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.nombre}</Text>
                <Text>ID: {item.id}</Text>
                <Text>Fecha de inicio: {item.fechaInicio}</Text>
                <Text>Fecha de fin: {item.fechaFin}</Text>
                <Text>Cerrado: {item.cerrado.toString()}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold' }}>Items:</Text>
                <Button
                    title="Agregar"
                    onPress={() => navigation.navigate('Cuentas_Add_Item', { onSave: handleSaveItem })}
                />
            </View>
            {items.length ? (
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text>No hay elementos aún.</Text>
            )}
        </View>
    );
};

export default Cuentas_Main;
