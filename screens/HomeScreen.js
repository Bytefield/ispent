import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to My App</Text>
            <Button
                title="Nueva compra"
                onPress={() => navigation.navigate('Main')}
            />
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Go to Items"
                onPress={() => navigation.navigate('Items')}
            />
            <Button
                title="Go to Admin"
                onPress={() => navigation.navigate('Admin')}
            />
        </View>
    );
}