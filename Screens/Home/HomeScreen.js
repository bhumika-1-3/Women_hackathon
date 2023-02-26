import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Modal, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Entypo } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Friends from './Friends';

export default function Home({ navigation }) {
  // const [day, setDay] = useState();

  const Friend = [
    {
      name: "Bhumi",
      recentDate: "2023-02-26",
      insync: true,
      count: 1,
    },
    {
      name: "Anaida",
      recentDate: "2023-02-13",
      insync: false,
      count: 2,
    },
    {
      name: "Prachi",
      recentDate: "2023-01-31",
      insync: false,
      count: 2,
    },
    {
      name: "Urmi",
      recentDate: "2023-02-20",
      insync: false,
      count: 1,
    },

  ]
  const today = new Date();
  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const month = monthNames[today.getMonth()];
  const day = today.getDate();
  const [modalVisible, setModalVisible] = useState(false);
  const [datevis, setDatevis] = useState(false);
  const [datevis2, setDatevis2] = useState(false);
  const [startDate, setStart] = useState(``)
  const [endDate, setEnd] = useState(``)

  const onChangeStart = (event, selectedDate) => {
    setDatevis(false);
    const currentDate = selectedDate;

    setStart(`${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`);
  };
  const onChangeEnd = (event, selectedDate) => {
    setDatevis2(false);
    const currentDate = selectedDate;
    setEnd(`${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`);

  };

  return (
    <ScrollView>

      <View className="p-3 self-center mt-20 justify-center">
        <Modal
          animationType="slide"
          transparent={true}
          statusBarTranslucent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable onPress={() => setModalVisible(!modalVisible)} className="self-start m-2 bottom-2"><Text><Entypo name="circle-with-cross" size={28} color="black" /></Text></Pressable>
              <Text style={styles.modalText} className="text-lg">Set the dates</Text>
              <View className="flex-row gap-2 p-4">

                <TouchableOpacity onPress={() => setDatevis(!datevis)} className="bg-rose-500  dark:bg-zinc-200 p-4 rounded-full m-6 self-center justify-center">
                  <Text className="text-zinc-200 dark:text-zinc-900 font-bold">Start Date</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDatevis2(!datevis2)} className="bg-rose-500  dark:bg-zinc-200 p-4 rounded-full m-6 self-center justify-center">
                  <Text className="text-zinc-200 dark:text-zinc-900 font-bold">End Date</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.modalText} className="text-lg">Describe Your Flow</Text>
              <View className={"flex-row justify-between items-center"}>
                <View className={"flex-row items-center self-center"}>
                  <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className="bg-rose-500  dark:bg-zinc-200 p-4 rounded-full m-6 self-center justify-center">
                    <Text className="text-zinc-200 dark:text-zinc-900 font-bold">Light</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className="bg-rose-500 dark:bg-zinc-200 p-4 rounded-full m-6 self-center justify-center">
                    <Text className="text-zinc-200 dark:text-zinc-900 font-bold">Normal</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className="bg-rose-500 dark:bg-zinc-200 p-4 rounded-full m-6 self-center justify-center">
                    <Text className="text-zinc-200 dark:text-zinc-900 font-bold">Heavy</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {datevis && <DateTimePicker
                testID="dateTimePicker"
                value={today}
                // mode={mode}
                is24Hour={false}
                onChange={onChangeStart}
              />}
              {datevis2 && <DateTimePicker
                testID="dateTimePicker"
                value={today}
                // mode={mode}
                is24Hour={false}
                onChange={onChangeEnd}
              />}

              {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
            </View>
          </View>
        </Modal>
        <View className="self-center p-3">
          <CircularProgress
            value={100}
            radius={140}
            duration={26784000}
            initialValue={4}
            progressValueFontSize={32}
            progressValueStyle={{ fontWeight: '500', color: '#e11d48' }}
            inActiveStrokeColor={'#f43f5e'}
            inActiveStrokeOpacity={0.2}
            activeStrokeColor={'#e11d48'}
            activeStrokeSecondaryColor={'#f43f5e'}
            valueSuffix={' Days Left'}
            inActiveStrokeWidth={30}
            activeStrokeWidth={30}

            onAnimationComplete={() => { alert('callback') }}
          />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)} className="flex-row bg-rose-500 dark:bg-zinc-200 p-4 rounded-full m-6 self-center justify-center">
          <Text className="text-zinc-200 dark:text-zinc-900 font-bold">Got your periods ?</Text>
        </TouchableOpacity>
        <View className="flex-row gap-10 p-5">
          <View className="p-7 bg-rose-400 rounded-2xl">
            <Text className="text-lg text-zinc-100 font-bold underline">Start Date :</Text>
            <Text className="text-base text-zinc-100 font-bold">{startDate}</Text>
          </View>
          <View className="p-7 bg-rose-400 rounded-2xl">
            <Text className="text-lg text-zinc-100 font-bold underline">End Date :</Text>
            <Text className="text-base text-zinc-100 font-bold">{endDate}</Text>
          </View>
        </View>
        <Text className="self-center  p-3 pt-8 text-lg font-semibold">Friends Report</Text>
        <FlatList data={Friend} keyExtractor={(p) => p.id}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          renderItem={({ item }) => <Friends
            {...item}
          />}>
        </FlatList>
      </View>
    </ScrollView>

  );


}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 18,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});