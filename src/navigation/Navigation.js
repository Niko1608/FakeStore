import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Account from '../screens/Account';
import ProductList from '../screens/ProductList'
import Favorite from '../screens/Favorite';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Account' component={Account} options={{
                headerTitle: 'Mi cuenta',
                headerTitleAlign: 'center',
                tabBarLabel: 'Mi cuenta',
                tabBarIcon: ({ color, size }) => (
                    <Icon name='user' color={color} size={size} />
                )
            }} />
            <Tab.Screen name='ProductList' component={ProductList} options={{
                headerTitle: 'Productos',
                headerTitleAlign: 'center',
                tabBarLabel: 'Productos',
                tabBarIcon: () => renderProductListImage(),

            }} />
            <Tab.Screen name='Favorites' component={Favorite} options={{
                headerTitle: 'Favoritos',
                headerTitleAlign: 'center',
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size }) => (
                    <Icon name='star' color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    )
}

function renderProductListImage() {
    return (
        <Image
            source={require('../assets/ProductList.png')}
            style={{ width: 70, height: 70, top: -20 }}

        />
    )
};