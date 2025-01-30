import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { View } from 'react-native-web'

export default function AddStudent() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const newStudent = {
        name: name,
        id: "451d",
        age: 15
    }

    return (
        <View>
            <TextInput mode='outlined' label='Name' value={name} onChangeText={setName} />
            <Button onPress={() => {
                navigation.popTo('List', { newStudent });
            }} >Add</Button>
        </View>
    )
}
