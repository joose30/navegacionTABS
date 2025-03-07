import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Index from './index';
import Perfil from './perfil';
import Settings from './setings';
import Productos from './Productos';
import Categorias from './Categorias';
import CategoriaProductos from './CategoriaProductos';

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Index" component={Index} />
            <Tab.Screen name="Perfil" component={Perfil} options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome6 name="person-breastfeeding" size={24} color={color} />
            }} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Productos" component={Productos} options={{
                title: 'Productos',
                tabBarIcon: ({ color }) => <FontAwesome6 name="box" size={24} color={color} />
            }} />
            <Tab.Screen name="Categorias" component={Categorias} options={{
                title: 'Categorías',
                tabBarIcon: ({ color }) => <FontAwesome6 name="list" size={24} color={color} />
            }} />
            <Tab.Screen name="CategoriaProductos" component={CategoriaProductos} options={{
                title: 'Productos por Categoría',
                tabBarButton: () => null // Ocultar esta tab
            }} />
        </Tab.Navigator>
    );
}