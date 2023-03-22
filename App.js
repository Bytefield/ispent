import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';

// Screens
import HomeScreen       from './screens/HomeScreen';
import AdminScreen      from './screens/AdminScreen';
import ItemsScreen      from './screens/ItemsScreen';
import ProfileScreen    from './screens/ProfileScreen';
import LoginScreen      from './screens/LoginScreen';
import Main             from './screens/compra/Main';
import ProductoDetalle  from './screens/compra/ProductoDetalle';
import Scan             from './screens/compra/Scan';
import Cuentas_Main     from './screens/cuentas/Cuentas_Main';
import Cuentas_Add_Item     from './screens/cuentas/Cuentas_Add_Item';

// Modules
import LoginButton      from './modules/buttons/Login';

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <LoginButton onPress={() => navigation.navigate('Login')} />
                        ),
                    })}
                />
                <Stack.Screen name="Cuentas_Main" component={Cuentas_Main} />
                <Stack.Screen name="Cuentas_Add_Item" component={Cuentas_Add_Item} />
                <Stack.Screen name="Admin" component={AdminScreen} />
                <Stack.Screen name="Items" component={ItemsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Scan" component={Scan} />
                <Stack.Screen name="ProductoDetalle" component={ProductoDetalle} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}