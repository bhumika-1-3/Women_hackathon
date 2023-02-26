import { View, Text } from 'react-native'
import React from 'react'
import { Bubble, GiftedChat, Avatar } from 'react-native-gifted-chat'
import { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const [randomLetter, setRandomLetter] = useState('');

    const handleGenerateRandomLetter = () => {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        setRandomLetter(alphabet[randomIndex]);
    };
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                name: "Bhumika",
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: <Fontisto name="persons" size={24} color="black" />,
                },
            },
        ])
    }, [])

    const onSend = messagesArray => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messagesArray),);
        handleGenerateRandomLetter();
    }


    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                    name: 'Bhumika',
                    // avatar: 'https://your.avatar.url',
                }}
                renderUsername={props => {
                    return <Text style={{ fontSize: 10, paddingLeft: 4 }}>{props.name}</Text>
                }}
                renderBubble={props => {
                    return (
                        <View>
                            <Text >{props.currentMessage.user.name}</Text>
                            <Bubble {...props} wrapperStyle={{
                                right: {
                                    backgroundColor: "#fb7185",
                                    padding: 7,
                                    // marginRight: 5
                                }
                                ,
                                left: {
                                    padding: 7
                                }
                            }}>

                            </Bubble>
                        </View>
                    )
                }}
                renderAvatar={props => {
                    return <Fontisto name="persons" size={24} color="black" />;
                }}
                // renderUsernameOnMessage={true}

                bottomOffset={10}
            />
        </View>
    )
}