import React from 'react'
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Friends = ({ name, insync, recentDate, count }) => {

    const { colorScheme } = useColorScheme();
    return (
        <View className="p-5 my-5 bg-white dark:bg-gray-50/10 w-full rounded-3xl">
            {/* <View className="bg-white rounded-3xl"><Image
                source={{ uri: image }} className="w-full h-72" style={{ resizeMode: "contain" }}></Image></View> */}
            <View className="mt-5">

                <Text className="text-slate-600 dark:text-zinc-300 text-sm">{name}</Text>
                <Text className="text-slate-900 dark:text-zinc-200 text-base font-bold mb-2">{recentDate}</Text>
                <View className={"flex-row justify-between items-center my-3"}>
                    {/* <Fontisto name="fire" size={24} color="black" />
                    <Fontisto name="fire" size={24} color="black" />
                    <Fontisto name="fire" size={24} color="black" /> */}
                    {count == 0 ?
                        <View className={"flex-row items-center gap-3"}>
                            <Fontisto name="fire" size={24} color="black" />
                            <Fontisto name="fire" size={24} color="black" />
                            <Fontisto name="fire" size={24} color="black" />
                        </View>
                        :
                        count == 1 ?
                            <View className={"flex-row items-center gap-3"}>
                                <Fontisto name="fire" size={24} color="#f43f5e" />
                                <Fontisto name="fire" size={24} color="black" />
                                <Fontisto name="fire" size={24} color="black" />
                            </View>
                            :
                            count == 2 ?
                                <View className={"flex-row items-center gap-3"}>
                                    <Fontisto name="fire" size={24} color="#f43f5e" />
                                    <Fontisto name="fire" size={24} color="#f43f5e" />
                                    <Fontisto name="fire" size={24} color="black" />
                                </View>
                                :
                                <View className={"flex-row items-center gap-3"}>
                                    <Fontisto name="fire" size={24} color="#f43f5e" />
                                    <Fontisto name="fire" size={24} color="#f43f5e" />
                                    <Fontisto name="fire" size={24} color="#f43f5e" />
                                </View>
                    }
                    <Text className={"text-2xl font-extrabold dark:text-white"}>
                        {insync ? <View>
                            <Text>In Sync</Text>
                            <Ionicons name="md-heart-sharp" size={24} color="#f43f5e" />
                        </View>
                            :
                            <Ionicons name="md-heart-sharp" size={24} color="black" />
                        }
                    </Text>

                </View>

            </View>
        </View>
    )
}

export default Friends