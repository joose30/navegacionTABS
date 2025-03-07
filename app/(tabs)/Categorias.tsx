import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    CategoriaProductos: { categoria: string };
};

export default function Categorias() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [categorias, setCategorias] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategorias(data));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={categorias}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.itemContainer} 
                        onPress={() => navigation.navigate('CategoriaProductos', { categoria: item })}
                    >
                        <Text style={styles.title}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});