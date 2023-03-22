import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const Cuentas_Add_Item = ({ navigation, route }) => {
  const [nombre, setNombre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [cerrado, setCerrado] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { onSave } = route.params;

  const handleSave = () => {
    if (!nombre || !fechaInicio) {
      setErrorMessage('El nombre y la fecha de inicio son campos requeridos.');
      return;
    }

    onSave({
      id: uuidv4(),
      nombre,
      fechaInicio,
      fechaFin,
      cerrado,
      eventos: [],
    });
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Guardar" onPress={handleSave} />
      ),
      title: 'Agregar cuenta',
    });
  }, [navigation, handleSave]);

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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
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
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de inicio:</Text>
        <TextInput
          value={fechaInicio}
          onChangeText={setFechaInicio}
          placeholder="Ingrese la fecha de inicio (formato: yyyy-mm-dd)"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de fin:</Text>
        <TextInput
          value={fechaFin}
          onChangeText={setFechaFin}
          placeholder="Ingrese la fecha de fin (formato: yyyy-mm-dd)"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cerrado:</Text>
        <TextInput
          value={cerrado.toString()}
          onChangeText={(value) => setCerrado(value === 'true')}
          placeholder="Ingrese true o false"
        />
      </View>
    </View>
  );
};

export default Cuentas_Add_Item;
