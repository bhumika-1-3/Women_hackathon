import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import CustomTextInput from './InputTag'
import { Ionicons } from '@expo/vector-icons';
import img from "../../Images/register1.gif"
import { AntDesign } from '@expo/vector-icons';

const Login = ({ navigation }) => {
    return (
        <View>
            {/* <View className="h-40 self-center p-4"> */}
            <Image className="w-full h-56" style={{ resizeMode: "contain" }} source={img}></Image>
            {/* </View> */}
            <View className="rounded-lg bottom-8">
                <Text
                    className="px-9"
                    style={{
                        marginTop: 50,
                        fontSize: 27,
                        fontWeight: '600',
                        color: '#000',
                    }}>
                    Login
                </Text>

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
                <Text className="self-end px-8 py-3 font-bold text-rose-500">Forgot password ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home', "Bhumika")} className="m-5 flex-row bg-rose-500 dark:bg-zinc-200 p-3 rounded-lg w-10/12 self-center justify-center">
                    <Text className="text-zinc-200 dark:text-slate-900 text-lg font-bold">Login
                        &nbsp;
                        <Ionicons name="ios-arrow-redo-sharp" size={24} color="white" />
                    </Text>
                </TouchableOpacity>
                <View className="flex-row mx-4">
                    <Text className="text-2xl text-zinc-400">------------------------&nbsp;</Text>
                    <Text className="top-2 text-zinc-400">Or</Text>
                    <Text className="text-2xl text-zinc-400">&nbsp;-------------------------</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home', "Bhumika")} className="m-5 flex-row bg-zinc-300 dark:bg-zinc-200 p-3 rounded-lg w-10/12 self-center justify-center">
                    <Text className="text-zinc-500 dark:text-slate-900 text-lg font-semibold">
                        <AntDesign name="google" size={22} />&nbsp;
                        Login with Google
                    </Text>
                </TouchableOpacity>
                <Text className="text-zinc-400 self-center bottom-2 font-bold">New to the team ? &nbsp;
                    <Text className="text-rose-500" onPress={() => navigation.navigate('Register')}>Register
                    </Text>
                </Text>
            </View>
        </View>
    )
}


export default Login