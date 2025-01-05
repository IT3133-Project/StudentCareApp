import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, DataTable, Divider, Text } from 'react-native-paper';
import { courses, marks, subjects } from '../data/StudentsDb';
import Header from './Header';


export default function Subjects({ route }) {
    const user = route.params?.user;


    const subjectDetail = subjects.filter(s => user.course_id === s.course_id);
    const marksDetail = marks.filter(m => user.course_id === m.subject_id);
    const CourseDetail = courses.find(c => user.course_id === c.id);

    const totalMarks = marksDetail.reduce((sum, mark) => sum + mark.marks, 0);
    const averageMarks = marksDetail.length > 0 ? (totalMarks / marksDetail.length).toFixed(2) : 0;



    return (
        <>
            <View style={styles.header}>
                <Header />
            </View>

            <View styles={styles.body}>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.container}>
                            <View style={styles.overview}>
                                <Text variant='displaySmall'>{CourseDetail?.name}</Text>
                                <Text> {CourseDetail.length} Subjects | Average: {averageMarks} </Text>
                            </View>

                            <Divider />

                            <Text style={styles.bold}>Marks Information</Text>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Subject</DataTable.Title>
                                    <DataTable.Title >Marks</DataTable.Title>
                                </DataTable.Header>

                                {subjectDetail.map((s) => (
                                    <DataTable.Row key={s.course_id}>
                                        <DataTable.Cell>{s.name}</DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                                {marksDetail.map((m) => (
                                    <DataTable.Row key={m.student_id}>
                                        <DataTable.Cell>{m.marks}</DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                            </DataTable>
                            
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
        
    },
    avatar: {

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
    bold: {
        fontWeight: 'bold',
    },
    header: {
        flex: 3,
        width: "100%",
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
        height: 30
    },
    footerText: {
        color: '#fff',
    }
});