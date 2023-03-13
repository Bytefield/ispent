import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function LoginButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{ color: '#fff', fontSize: 16, marginRight: 10 }}>
                Login
            </Text>
        </TouchableOpacity>
    );
}