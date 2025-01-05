import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Card, Divider, Text } from 'react-native-paper';
import { courses } from '../data/StudentsDb';
import Header from './Header';

export default function Course({ route }) {
    const user = route.params?.user;
    const CourseDetail = courses.find(course => user.course_id === course.id);

    return (
        <>


            
            <Header />

            <View styles={styles.body}>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.container}>
                            <View style={styles.overview}>
                                <Text variant='displaySmall'>{CourseDetail.name}</Text>
                                <Text>Code: {CourseDetail.course_code} | Dept: {CourseDetail.department} </Text>
                            </View>
                            <Divider />
                            <Text style={styles.bold}>Course Information</Text>
                            <Text>  Code:  {CourseDetail.course_code} </Text>
                            <Text>  Department:  {CourseDetail.department} </Text>
                            <Text>  Duration: {CourseDetail.duration} </Text>
                            <Text>  Description:  {CourseDetail.description} </Text>
                            <Divider />
                        </View>
                    </Card.Content>
                </Card>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>MyApp © 2024</Text>
            </View>






        </>
    );
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 5,
    },
    card: {
        marginTop: 20
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    overview: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
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
        marginTop: 20,
        backgroundColor: '#4a148c',
        height: 20,
    },
    footerText: {
        color: '#fff',
    }

});