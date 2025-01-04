import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text } from 'react-native-paper';
import { students } from '../data/StudentsDb';

export default function Profile({ studentId }) {
    const selectedStudent = students.find(student => student.id === studentId);
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.avatar} source={require('../assets/profilepic/1.jpg')} />

                <Text variant='displayMedium'>{selectedStudent.name}</Text>
                <Text> <Text style={styles.bold}> Age: </Text> {selectedStudent.age} </Text>
                <Text> <Text style={styles.bold}> Gender: </Text> {selectedStudent.gender} </Text>
                <Text style={styles.bold}>Contact Information</Text>
                <Text> <Text style={styles.bold}> Email: </Text> {selectedStudent.email} </Text>
                <Text> <Text style={styles.bold}> Phone: </Text> {selectedStudent.phone} </Text>
                <Text> <Text style={styles.bold}> Address: </Text> {selectedStudent.address} </Text>

                <Text style={styles.bold}>Biological Information</Text>
                <Text> <Text style={styles.bold}> Gender: </Text> {selectedStudent.gender} </Text>
                <Text> <Text style={styles.bold}> Age: </Text> {selectedStudent.age} </Text>
                <Text> <Text style={styles.bold}> Blood Group: </Text> {selectedStudent.blood_group} </Text>
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