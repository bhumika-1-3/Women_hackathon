import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ProductsList from './ProductsList'
import BottomNavigation from '../BottomNavigation'

export default function Ecommerce() {
    return (
        <View style={{ flex: 1 }}>
            <BottomNavigation />
        </View>
    )
}