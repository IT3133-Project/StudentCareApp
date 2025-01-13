import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { students } from '../data/StudentsDb';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StudentList() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Student List</Text>
            <FlatList
                data={students}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainTab', { user: item })}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        paddingTop: 22,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#333',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    itemDetails: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});
