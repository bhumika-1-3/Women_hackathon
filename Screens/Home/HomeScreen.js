import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function Home({ navigation }) {
  // const [day, setDay] = useState();
  const today = new Date();

  return (
    <View className="p-4 self-center mt-32">
      <CircularProgress
        value={100}
        radius={140}
        duration={26784000}
        initialValue={4}
        progressValueFontSize={32}
        progressValueStyle={{ fontWeight: '500', color: '#e11d48' }}
        inActiveStrokeColor={'#9b59b6'}
        inActiveStrokeOpacity={0.2}
        activeStrokeColor={'#fb7185'}
        activeStrokeSecondaryColor={'#C25AFF'}
        valueSuffix={' Days Left'}
        inActiveStrokeWidth={30}
        activeStrokeWidth={30}

        onAnimationComplete={() => { alert('callback') }}
      />
    </View>
  );
}

