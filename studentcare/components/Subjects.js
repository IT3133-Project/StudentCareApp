import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text } from 'react-native-paper';
import { courses } from '../data/StudentsDb';
import BottomTabNavigatior from './BottomTabNavigator'

export default function Subjects({ route }) {
    const user = route.params;

    return (
        <>
        <BottomTabNavigatior/>
            <View style={styles.container}>
                <Text variant='displayMedium'>{user.name}</Text>
                <Text> <Text style={styles.bold}> Code: </Text> {user.course_code} </Text>
                <Text> <Text style={styles.bold}> Dept: </Text> {user.department} </Text>
                <Text style={styles.bold}>Course Information</Text>
                <Text> <Text style={styles.bold}> Code: </Text> {user.course_code} </Text>
                <Text> <Text style={styles.bold}> Department: </Text> {user.department} </Text>
                <Text> <Text style={styles.bold}> Duration: </Text> {user.duration} </Text>
                <Text> <Text style={styles.bold}> Description: </Text> {user.description} </Text>
            </View>
        </>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {

    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    }
});