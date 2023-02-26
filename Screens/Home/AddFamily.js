import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { DataTable, Provider, Modal, Portal, Button } from 'react-native-paper';

export default function AddFamily({ navigation }) {
    const [visible, setVisible] = React.useState(false);
    const [sendData, setData] = useState({
        name: "",
        phone: "",
        relation: "",
    });
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const [fam, setFam] = useState(null);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMDMwLCJpYXQiOjE2Nzc0MjE4MzAsImp0aSI6ImJhODdmZTliZjhkZjQ3NWVhNjhlMjBhMTVkNzQ4OWYxIiwidXNlcl9pZCI6OH0.6aYvFPAeJI7uiEyMe_I5VghjwicocA1TwHENTWxcROg");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    useEffect(() => {
        fetch('http://womenhackathon.pythonanywhere.com/family/', requestOptions)
            .then(response => response.json())
            .then(data => setFam(data))
            .catch(error => console.error(error));

    }, []);
    const inputChangeHandler = (value, name) => {
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const addMember = async () => {
        var formdata = new FormData();
        formdata.append("phone", sendData.phone);
        formdata.append("name", sendData.name);
        formdata.append("relation", sendData.relation);
        try {
            var requestO = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            fetch("http://womenhackathon.pythonanywhere.com/family/", requestO)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        } catch (error) {
            console.error(error);
        }
        hideModal();
    }
    return (
        <Provider>
            <View className="flex-row gap-28" style={{ padding: 10, margin: 10 }}>
                <Text className="text-lg p-2">Add New Member</Text>
                <Button buttonColor="#f43f5e" className="self-end float-right" icon="plus" mode="contained" onPress={showModal}>
                    Add
                </Button>
            </View>

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text className="p-3">Add details</Text>
                    <TextInput value={sendData.name}
                        onChangeText={value => inputChangeHandler(value, 'name')} label="Name" style={{ padding: 5, marginBottom: 14 }} selectionColor='#f43f5e' activeUnderlineColor="#f43f5e" outlineColor='#f43f5e'></TextInput>
                    <TextInput value={sendData.phone}
                        onChangeText={value => inputChangeHandler(value, 'phone')} label="Phone Number" placeholder='+91...' style={{ padding: 5, marginBottom: 14 }} selectionColor='#f43f5e' activeUnderlineColor="#f43f5e" outlineColor='#f43f5e'></TextInput>
                    <TextInput value={sendData.relation}
                        onChangeText={value => inputChangeHandler(value, 'relation')} label="Relation" style={{ padding: 5, marginBottom: 18 }} selectionColor='#f43f5e' activeUnderlineColor="#f43f5e" outlineColor='#f43f5e'></TextInput>
                    <TouchableOpacity className="m-5 flex-row bg-rose-500 dark:bg-zinc-200 p-3 rounded-lg w-10/12 self-center justify-center"
                        onPress={addMember}
                    >
                        <Text className="text-zinc-200 dark:text-slate-900 text-lg font-bold">ADD
                        </Text>
                    </TouchableOpacity>
                </Modal>
            </Portal>

            <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title><Text className="font-semibold text-base">Name</Text></DataTable.Title>
                    <DataTable.Title ><Text className="font-semibold text-base">Phone Number</Text></DataTable.Title>
                    <DataTable.Title numeric><Text className="font-semibold text-base">Relation</Text></DataTable.Title>
                </DataTable.Header>
                {fam == null ? <Text>No Family members added</Text> :
                    fam.map((i) => {
                        return <DataTable.Row style={{ borderBottomWidth: 2, borderBottomColor: "#ffe4e6" }} key={i.name + i.phone}>
                            <DataTable.Cell>{i.name}</DataTable.Cell>
                            <DataTable.Cell>{i.phone}</DataTable.Cell>
                            <DataTable.Cell numeric>{i.relation}</DataTable.Cell>
                        </DataTable.Row>
                    })
                }

            </DataTable>
        </Provider>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#fda4af',
    },
    tabledata: {
        fontWeight: "700"
    }
});