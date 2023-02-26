import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import CustomTextInput from './InputTag'
import { Ionicons } from '@expo/vector-icons';
import img from "../../Images/register1.gif"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Register = ({ navigation }) => {

    const [sendData, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });
    const sendDataToApi = async (data) => {
        console.log('====================================');
        console.log(sendData);
        console.log('====================================');
        try {
            const response = await fetch('http://womenhackathon.pythonanywhere.com/account/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json ; charset=UTF-8'
                },
                body: JSON.stringify({
                    first_name: sendData.first_name,
                    last_name: sendData.last_name,
                    email: sendData.email,
                    password: sendData.password,
                })
            });

            console.log(responseData); // do something with the response data
            const responseData = await response.json();
            navigation.navigate('Home', "Bhumika")
        } catch (error) {
            console.error(error);
        }
    }
    const inputChangeHandler = (value, name) => {
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };


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
                    name="first_name"
                    placeholder={'Enter First Name'}
                    icon={"face-man-profile"}
                    value={sendData.first_name}
                    onChangeText={value => inputChangeHandler(value, 'first_name')}
                />
                <CustomTextInput
                    name="last_name"
                    placeholder={'Enter Last Name'}
                    icon={"face-man-profile"}
                    value={sendData.last_name}
                    onChangeText={value => inputChangeHandler(value, 'last_name')}

                />
                <CustomTextInput
                    name="email"
                    placeholder={'Enter Email Id'}
                    icon={"email"}
                    value={sendData.email}
                    onChangeText={value => inputChangeHandler(value, 'email')}

                />
                <CustomTextInput
                    name="password"
                    type={'password'}
                    placeholder={'Enter Password'}
                    icon={"account-lock"}
                    value={sendData.password}
                    onChangeText={value => inputChangeHandler(value, 'password')}

                />

                {/* <Text className="self-end px-8 py-3 font-bold text-blue-500">Forgot password ?</Text> */}
                <TouchableOpacity onPress={sendDataToApi} className="m-6 flex-row bg-rose-500 dark:bg-zinc-200 p-3 rounded-lg w-10/12 self-center justify-center">
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
                        <MaterialCommunityIcons name="facebook" size={22} />&nbsp;
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