import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const Cuentas_Add_Evento = ({ navigation, route }) => {

    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [cantidad, setCantidad] = useState('');

    const [nombreErrorMessage, setNombreErrorMessage] = useState('');
    const [fechaErrorMessage, setFechaErrorMessage] = useState('');
    const [cantidadErrorMessage, setCantidadErrorMessage] = useState('');

    const { onSave, itemId } = route.params;

    const handleSave = () => {
        if (nombreErrorMessage || fechaErrorMessage || cantidadErrorMessage) {
            if (!nombre) {
                setNombreErrorMessage('El nombre es campo requerido.');
            }
            if (!fecha) {
                setFechaErrorMessage('La fecha es campo requerido.');
            }
            if (!cantidad) {
                setCantidadErrorMessage('La cantidad es campo requerido.');
            }
            return;
        }

        onSave({
            id: uuidv4(),
            nombre,
            fecha,
            cantidad,
            itemId,
        });
        navigation.goBack();
    };

    const styles = {
        container: {
            padding: 15,
        },
        inputContainer: {
            marginBottom: 15,
        },
        label: {
            fontWeight: 'bold',
        },
        errorMessage: {
            color: 'red',
            marginBottom: 15,
        },
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>ID:</Text>
                <Text>{uuidv4()}</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nombre:</Text>
                <TextInput
                    value={nombre}
                    onChangeText={setNombre}
                    placeholder="Ingrese el nombre"
                />
                {nombreErrorMessage ? (
                    <Text style={styles.errorMessage}>{nombreErrorMessage}</Text>
                ) : null}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Fecha:</Text>
                <TextInput
                    value={fecha}
                    onChangeText={setFecha}
                    placeholder="Ingrese la fecha"
                />
                {fechaErrorMessage ? (
                    <Text style={styles.errorMessage}>{fechaErrorMessage}</Text>
                ) : null}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Cantidad:</Text>
                <TextInput
                    value={cantidad}
                    onChangeText={setCantidad}
                    placeholder="Ingrese la cantidad"
                />
                {cantidadErrorMessage ? (
                    <Text style={styles.errorMessage}>{cantidadErrorMessage}</Text>
                ) : null}
            </View>
            <Button title="Guardar" onPress={handleSave} />
        </View>
    );
};

export default Cuentas_Add_Evento;