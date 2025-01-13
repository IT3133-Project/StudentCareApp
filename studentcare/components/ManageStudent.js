// UserAccountPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserAccountPage = () => {
    const navigation = useNavigation();

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

    // Handlers
    const handleUpdateUserDetails = () => {
        Alert.alert('Success', 'User details updated successfully!');
        // Update logic here
    };

    const handleUpdateCredentials = () => {
        Alert.alert('Success', 'Credentials updated successfully!');
        // Update logic here
    };

    const handleDeleteUser = () => {
        Alert.alert('Confirm', 'Are you sure you want to delete this account?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    // Delete user logic here
                    Alert.alert('Deleted', 'Account deleted successfully!');
                    navigation.navigate('Login');
                }
            }
        ]);
    };

    const handleManageCourseDetails = () => {
        navigation.navigate('Course');
    };

    const handleManageSubjectAndMarks = () => {
        navigation.navigate('Subjects');
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

            <Text style={styles.sectionHeading}>Manage Other Details</Text>
            <Button title="Manage Course Details" onPress={handleManageCourseDetails} />
            <Button title="Manage Subject & Marks" onPress={handleManageSubjectAndMarks} />
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
    }
});

export default UserAccountPage;
