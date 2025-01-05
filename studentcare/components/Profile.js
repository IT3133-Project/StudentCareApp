import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';

import { Avatar, Card, Divider, Text } from 'react-native-paper';
import BottomTabNavigatior from './BottomTabNavigator'
import Header from './Header';
export default function Profile({ route }) {
    const user = route.params?.user;
    return (
        <>
            <ScrollView>
                <Header />
                <Card>
                    <Card.Content>
                        <View style={styles.container}>
                            <View style={styles.overview}>
                                <Avatar.Image
                                    size={150}
                                    source={user.profile_pic}
                                    style={styles.avatar}
                                />
                                <Text variant='displaySmall' >{user.name}</Text>
                                <Text>  Age: {user.age} | Gender: {user.gender} </Text>
                            </View>
                            <Divider />

                            <View style={styles.info}>
                                <Text style={styles.bold}>Contact Information</Text>
                                <Text> Email: {user.email} </Text>
                                <Text> Phone:  {user.phone} </Text>
                                <Text> Address: {user.address} </Text>
                            </View>

                            <Divider />

                            <View style={styles.bioInfo}>
                                <Text style={styles.bold}>Biological Information</Text>
                                <Text> Gender:  {user.gender} </Text>
                                <Text> Age:  {user.age} </Text>
                                <Text> Blood Group:  {user.blood_group} </Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>MyApp © 2024</Text>
                </View>
            </ScrollView>

        </>
    );
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 10,
        flexDirection: 'column',
    },
    avatar: {
        marginBottom: 10,

    },
    overview: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    info: {
        marginTop: 10,
        marginBottom: 10,
    },
    bioInfo: {
        marginTop: 10,
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
        backgroundColor: '#4a148c',
        height:30
    },
    footerText:{
        color: '#fff',
    }
    
});