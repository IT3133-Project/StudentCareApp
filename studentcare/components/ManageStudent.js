import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ManageStudent = () => {
    const navigation = useNavigation();
    const route = useRoute();

    // User details state
    const [userDetails, setUserDetails] = useState({
        name: '',
        age: '',
        address: '',
        email: '',
        phone: '',
        gender: '',
        bloodGroup: ''
    });

    // Credentials state
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    // Student List State
    const [students, setStudents] = useState([]);

    // Effect to capture added students
    useEffect(() => {
        if (route.params?.newStudent) {
            setStudents(prevStudents => [...prevStudents, route.params.newStudent]);
        }
    }, [route.params?.newStudent]);

    // Handlers
    const handleUpdateUserDetails = () => {
        Alert.alert('Success', 'User details updated successfully!');
    };

    const handleUpdateCredentials = () => {
        Alert.alert('Success', 'Credentials updated successfully!');
    };

    const handleDeleteUser = () => {
        Alert.alert('Confirm', 'Are you sure you want to delete this account?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    Alert.alert('Deleted', 'Account deleted successfully!');
                    navigation.navigate('Login');
                }
            }
        ]);
    };

    const handleAddStudent = () => {
        navigation.navigate('AddStudent');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Manage User Account</Text>

            <Text style={styles.sectionHeading}>Personal Details</Text>
            {['name', 'age', 'address', 'email', 'phone', 'gender', 'bloodGroup'].map(field => (
                <TextInput
                    key={field}
                    style={styles.input}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={userDetails[field]}
                    onChangeText={(value) => setUserDetails(prev => ({ ...prev, [field]: value }))}
                />
            ))}
            <Button title="Update Personal Details" onPress={handleUpdateUserDetails} />

            <Text style={styles.sectionHeading}>Credentials</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={credentials.username}
                onChangeText={(value) => setCredentials(prev => ({ ...prev, username: value }))}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={credentials.password}
                onChangeText={(value) => setCredentials(prev => ({ ...prev, password: value }))}
            />
            <Button title="Update Credentials" onPress={handleUpdateCredentials} />

            <Button title="Delete Account" onPress={handleDeleteUser} color="red" />

            <Text style={styles.sectionHeading}>Manage Students</Text>
            <Button title="Add Student" onPress={handleAddStudent} />

            {students.length > 0 && (
                <View>
                    <Text style={styles.sectionHeading}>Student List</Text>
                    {students.map((student, index) => (
                        <Text key={index} style={styles.studentItem}>{student.name} (Age: {student.age})</Text>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    sectionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8
    },
    studentItem: {
        fontSize: 16,
        padding: 4
    }
});

export default ManageStudent;
