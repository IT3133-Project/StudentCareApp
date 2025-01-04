import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text } from 'react-native-paper';
import { courses } from '../data/StudentsDb';
import BottomTabNavigatior from './BottomTabNavigator'

export default function Subjects({ studentId }) {
    const selectedStudent = courses.find(course => course.id ===studentId );
    return (
        <>
        <BottomTabNavigatior/>
            <View style={styles.container}>
                <Text variant='displayMedium'>{selectedStudent.name}</Text>
                <Text> <Text style={styles.bold}> Code: </Text> {selectedStudent.course_code} </Text>
                <Text> <Text style={styles.bold}> Dept: </Text> {selectedStudent.department} </Text>
                <Text style={styles.bold}>Course Information</Text>
                <Text> <Text style={styles.bold}> Code: </Text> {selectedStudent.course_code} </Text>
                <Text> <Text style={styles.bold}> Department: </Text> {selectedStudent.department} </Text>
                <Text> <Text style={styles.bold}> Duration: </Text> {selectedStudent.duration} </Text>
                <Text> <Text style={styles.bold}> Description: </Text> {selectedStudent.description} </Text>
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