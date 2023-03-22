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