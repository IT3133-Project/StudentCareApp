import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text } from 'react-native-paper';
import { courses } from '../data/StudentsDb';
import BottomTabNavigatior from './BottomTabNavigator'

export default function Course() {
    const user = route.params;
    const CourseDetail= courses.find( course=>user.course_id === course.id);

    return (
        <>
        <BottomTabNavigatior/>
            <View style={styles.container}>
                <Text variant='displayMedium'>{CourseDetail.name}</Text>
                <Text> <Text style={styles.bold}> Code: </Text> {CourseDetail.course_code} </Text>
                <Text> <Text style={styles.bold}> Dept: </Text> {CourseDetail.department} </Text>
                <Text style={styles.bold}>Course Information</Text>
                <Text> <Text style={styles.bold}> Code: </Text> {CourseDetail.course_code} </Text>
                <Text> <Text style={styles.bold}> Department: </Text> {CourseDetail.department} </Text>
                <Text> <Text style={styles.bold}> Duration: </Text> {CourseDetail.duration} </Text>
                <Text> <Text style={styles.bold}> Description: </Text> {CourseDetail.description} </Text>
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