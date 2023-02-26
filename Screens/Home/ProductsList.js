import React from 'react'
import { FlatList, Text, SafeAreaView, Switch } from 'react-native'
import { products } from "../../Data";
import Cards from './Cards';
import { useColorScheme } from 'nativewind';


const ProductsList = ({ route, navigation }) => {
    // const itemId = route.params;
    // console.log(itemId);
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <SafeAreaView className="text-red-700 items-center justify-center bg-zinc-200 dark:bg-slate-900">
            <Switch className="self-end mx-4" value={colorScheme === "dark"} onChange={toggleColorScheme} />
            <FlatList data={products} keyExtractor={(p) => p.id}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                renderItem={({ item }) => <Cards
                    {...item}
                />}>
            </FlatList>
        </SafeAreaView>
    )
}

export default ProductsList