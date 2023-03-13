import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';

// Screens
import HomeScreen       from './screens/HomeScreen';
import AdminScreen      from './screens/AdminScreen';
import ItemsScreen      from './screens/ItemsScreen';
import ProfileScreen    from './screens/ProfileScreen';
import LoginScreen      from './screens/LoginScreen';
import CartScreen      from './screens/CartScreen';

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
                <Stack.Screen name="Admin"      component={AdminScreen} />
                <Stack.Screen name="Items"      component={ItemsScreen} />
                <Stack.Screen name="Profile"    component={ProfileScreen} />
                <Stack.Screen name="Login"      component={LoginScreen} />
                <Stack.Screen name="Cart"      component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}