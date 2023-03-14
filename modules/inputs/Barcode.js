import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function BarCode({ onBarCodeScanned, onCancel }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanning, setScanning] = useState(true);
    const [scannedData, setScannedData] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanning(false);
        setScannedData(data !== null);
        onBarCodeScanned(data);
    };

    const handleCancel = () => {
        onCancel();
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            { scanning ? (
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            ) : (
                <View>
                    {scannedData.success ? (
                        <ProductDetails data={scannedData.data} />
                    ) : (
                        <AddNewProduct data={scannedData.data} />
                    )}
                </View>
            )}
            <Button title="Cancel" onPress={handleCancel} />
        </View>
    );
}