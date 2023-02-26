import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import CustomTextInput from './InputTag'
import { Ionicons } from '@expo/vector-icons';
import img from "../../Images/register1.gif"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Register = ({ navigation }) => {
    return (
        <ScrollView>
            {/* <Image className="h-44 self-center" style={{ resizeMode: "contain" }} source={img}></Image> */}
            <View className="rounded-lg bottom-8">
                <Text
                    className="px-9"
                    style={{
                        marginTop: 50,
                        fontSize: 27,
                        fontWeight: '600',
                        color: '#000',
                    }}>
                    Register
                </Text>

                <CustomTextInput
                    placeholder={'Enter Full Name'}
                    icon={"face-man-profile"}
                    // value={email}
                    onChangeText={txt => {
                        setEmail(txt);
                    }}
                />
                <CustomTextInput
                    placeholder={'Enter Email Id'}
                    icon={"email"}
                    // value={email}
                    onChangeText={txt => {
                        setEmail(txt);
                    }}
                />
                <CustomTextInput
                    type={'password'}
                    placeholder={'Enter Password'}
                    icon={"account-lock"}
                    // value={password}
                    onChangeText={txt => {
                        setPassword(txt);
                    }}
                />
                <CustomTextInput
                    type={'password'}
                    placeholder={'Confirm Password'}
                    icon={"key-change"}
                    // value={password}
                    onChangeText={txt => {
                        setPassword(txt);
                    }}
                />
                {/* <Text className="self-end px-8 py-3 font-bold text-blue-500">Forgot password ?</Text> */}
                <TouchableOpacity onPress={() => navigation.navigate('Home', "Bhumika")} className="m-6 flex-row bg-rose-500 dark:bg-zinc-200 p-3 rounded-lg w-10/12 self-center justify-center">
                    <Text className="text-zinc-200 dark:text-slate-900 text-lg font-bold">Continue
                        &nbsp;
                        <Ionicons name="ios-arrow-redo-sharp" size={24} color="white" />
                    </Text>
                </TouchableOpacity>
                <View className="flex-row mx-4">
                    <Text className="text-2xl text-zinc-400">------------------------&nbsp;</Text>
                    <Text className="top-2 text-zinc-400">Or</Text>
                    <Text className="text-2xl text-zinc-400">&nbsp;-------------------------</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home', "Bhumika")} className="mt-4 mb-3 flex-row bg-zinc-300 dark:bg-zinc-200 p-3 rounded-lg w-10/12 self-center justify-center">
                    <Text className="text-zinc-500 dark:text-slate-900 text-lg font-semibold">
                        <AntDesign name="google" size={22} />&nbsp;
                        Signup with Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home', "Bhumika")} className="mb-5 flex-row bg-zinc-300 dark:bg-zinc-200 p-3 rounded-lg w-10/12 self-center justify-center">
                    <Text className="text-zinc-500 dark:text-slate-900 text-lg font-semibold">
                    <MaterialCommunityIcons name="facebook" size={22}  />&nbsp;
                        Signup with Facebook
                    </Text>
                </TouchableOpacity>
                <Text className="text-zinc-400 self-center bottom-2 font-bold">Joined us before ?&nbsp;
                    <Text className="text-rose-500" onPress={() => navigation.navigate('Login')}>Login
                    </Text>
                </Text>
            </View>
        </ScrollView>
    )
}

export default Register