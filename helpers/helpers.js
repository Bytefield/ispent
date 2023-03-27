import AsyncStorage from '@react-native-async-storage/async-storage';

export const onSaveItem = async (item, setItems) => {
    try {
        const jsonValue = await AsyncStorage.getItem('items');
        const storedItems = jsonValue != null ? JSON.parse(jsonValue) : [];
        const updatedItems = [...storedItems, item];
        setItems(updatedItems);
        await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
    } catch (e) {
        console.error('Error saving item to storage: ', e);
    }
};

export const onSaveEvento = async (idCuenta, evento, setItems) => {
    try {
        const jsonValue = await AsyncStorage.getItem('items');
        const storedItems = jsonValue != null ? JSON.parse(jsonValue) : [];
        const index = storedItems.findIndex(cuenta => cuenta.id === idCuenta);
        if (index !== -1) {
            const cuenta = storedItems[index];
            cuenta.eventos.push(evento);
            const updatedItems = [
                ...storedItems.slice(0, index),
                cuenta,
                ...storedItems.slice(index + 1),
            ];
            setItems(updatedItems);
            await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
        } else {
            console.error(`Cuenta with ID ${idCuenta} not found.`);
        }
    } catch (e) {
        console.error('Error saving evento to storage: ', e);
    }
};