import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Divider, Text } from 'react-native-paper';
import BottomTabNavigatior from './BottomTabNavigator'
export default function Profile({route}) {
    const user = route.params?.user;
    return (
        <>
        {/* <BottomTabNavigatior/> */}
            <View style={styles.container}>
                <Image style={styles.avatar} source={{uri:user.profile_pic}} />

                <Text variant='displayMedium'>{user.name}</Text>
                <Text> <Text style={styles.bold}> Age: </Text> {user.age} | </Text>
                <Text> <Text style={styles.bold}> Gender: </Text> {user.gender} </Text>
                <Divider/>
                <Text style={styles.bold}>Contact Information</Text>
                <Text> <Text style={styles.bold}> Email: </Text> {user.email} </Text>
                <Text> <Text style={styles.bold}> Phone: </Text> {user.phone} </Text>
                <Text> <Text style={styles.bold}> Address: </Text> {user.address} </Text>
                <Divider/>
                <Text style={styles.bold}>Biological Information</Text>
                <Text> <Text style={styles.bold}> Gender: </Text> {user.gender} </Text>
                <Text> <Text style={styles.bold}> Age: </Text> {user.age} </Text>
                <Text> <Text style={styles.bold}> Blood Group: </Text> {user.blood_group} </Text>
            </View>
            <View style={styles.footer}>
                <Text>MyApp © 2024</Text>
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
    },
    header: {
        flex: 3,
        width: "100%",
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
    },
    body: {
        flex: 5,
        width: "100%",
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
});