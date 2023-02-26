import React from 'react'
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";


const Cards = ({ description, title, price, category, image }) => {

    const [count, setCount] = React.useState(1);
    const { colorScheme } = useColorScheme();
    return (
        <View className="p-5 my-5 bg-white dark:bg-gray-50/10 w-full rounded-3xl">
            <View className="bg-white rounded-3xl"><Image
                source={{ uri: image }} className="w-full h-72" style={{ resizeMode: "contain" }}></Image></View>
            <View className="mt-5">

                <Text className="text-slate-600 dark:text-zinc-300 text-sm">{category}</Text>
                <Text className="text-slate-900 dark:text-zinc-200 text-base font-bold mb-8">{title}</Text>
                <View className={"flex-row justify-between items-center my-3"}>
                    <View className={"flex-row items-center gap-3"}>
                        <AntDesign
                            name="minuscircleo"
                            size={24}
                            color={colorScheme === "light" ? "black" : "white"}
                            onPress={() => {
                                if (count > 1) {
                                    setCount(count - 1)
                                }
                                else {
                                    Alert.alert("OOPS!", "Cart value cannot be Zero", [
                                        { text: "Go back", onPress: () => console.log("Alert closed") }
                                    ])
                                }
                            }}
                        />
                        <Text className={"text-xl dark:text-white"}>{count}</Text>
                        <AntDesign
                            name="pluscircleo"
                            size={24}
                            color={colorScheme === "light" ? "black" : "white"}
                            onPress={() => setCount(count + 1)}
                        />
                    </View>
                    <Text className={"text-2xl font-extrabold dark:text-white"}>
                        ${price * count}
                    </Text>
                </View>
                <Text numberOfLines={2} className="mb-3 text-slate-600 dark:text-zinc-300">{description}</Text>
                <TouchableOpacity className="flex-row bg-rose-500 dark:bg-zinc-200 p-4 rounded-full w-10/12 self-center justify-center">
                    <Text className="text-zinc-200 dark:text-zinc-900 font-bold">Add to Cart</Text>
                </TouchableOpacity>
                {/* <Image></Image> */}
            </View>
        </View>
    )
}

export default Cards