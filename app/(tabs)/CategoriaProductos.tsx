import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';

type RouteParams = {
    categoria: string;
};

export default function CategoriaProductos() {
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const navigation = useNavigation();
    const { categoria } = route.params;
    type Producto = {
        id: number;
        title: string;
        description: string;
        image: string;
    };

    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then(response => response.json())
            .then(data => setProductos(data));
    }, [categoria]);

    return (
        <View style={styles.container}>
            <Button title="Regresar" onPress={() => navigation.goBack()} />
            <FlatList
                data={productos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
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
        flexDirection: 'row',
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
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});