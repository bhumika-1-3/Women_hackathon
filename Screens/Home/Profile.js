import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// import Share from 'react-native-share';

// import files from '../assets/filesBase64';

const ProfileScreen = ({ navigation }) => {
    const [fam, setFam] = useState({
        first_name:"xx",
        last_name:"xx",
        email:"abc@"
    });
    const [yes, no] = useState(false);
    const myCustomShare = async () => {
        navigation.navigate('Family')
    };
    const random = [
        "Printer_YouTube",
        "Laptop_Drugs",
        "Dislike_Whale",
        "Website_Water",
        "Bird_Laptop",
        "Rollers_YouTube",
        "Soda_Dog",
        "Soda_Settings",
        "Mail_Body",
        "Towel_Shoes"
    ]
    const randomName = async () => {
        no(true);
        // random.map((i) => {

        // })
        console.log(random[0]);
        // try {

        //     fetch("https://names.drycodes.com/10")
        //         .then(response => response.text())
        //         .then(data => setFam(data))
        //         .catch(error => console.log('error', error));
        //     console.log(fam[0]);
        // } catch (error) {
        //     console.error(error);
        // }
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMDMwLCJpYXQiOjE2Nzc0MjE4MzAsImp0aSI6ImJhODdmZTliZjhkZjQ3NWVhNjhlMjBhMTVkNzQ4OWYxIiwidXNlcl9pZCI6OH0.6aYvFPAeJI7uiEyMe_I5VghjwicocA1TwHENTWxcROg");
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://womenhackathon.pythonanywhere.com/profile/", requestOptions)
            .then(response => response.json())
            .then(result => setFam(result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://i.pinimg.com/474x/de/99/93/de9993e752fc52646579448542c411d3.jpg',
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>{!yes ? fam.first_name : random[Math.floor(Math.random() * 6) + 1]}</Title>
                        <Caption style={styles.caption}>{fam.email}</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>{fam.first_name}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>{fam.last_name}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>{fam.email}</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>10</Title>
                    <Caption>Total Friends</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>123</Title>
                    <Caption>Forum likes</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" color="#f43f5e" size={25} />
                        <Text style={styles.menuItemText}>Your Favorites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="credit-card" color="#f43f5e" size={25} />
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={myCustomShare}>
                    <View style={styles.menuItem}>
                        <Icon name="share-outline" color="#f43f5e" size={25} />
                        <Text style={styles.menuItemText}>Alert Your Family</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={randomName}>
                    <View style={styles.menuItem}>
                        <Icon name="account-check-outline" color="#f43f5e" size={25} />
                        <Text style={styles.menuItemText}>Create anonymous name</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Ionicons name="settings" size={25} color="#f43f5e" />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});