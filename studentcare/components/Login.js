import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { students } from '../data/StudentsDb'


export default function Login() {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (!name || !pwd) {
            setError('Please Check your username or password')
        }
        const user = students.find((student) => student.username === name && student.password === pwd);
        if (user) {
            setError("");
            navigation.navigate('Profile', { user });

        } else {
            setError("Please Check your username or password ")
        }
    }


    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Text variant="displayLarge" style={styles.title}> STUDENT LOGIN</Text>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.input}>
                                <TextInput label="Username" mode="outlined" value={name} onChangeText={setName} />
                            </View>
                            <View style={styles.input}>
                                <TextInput label="Password" mode="outlined" secureTextEntry="true" value={pwd} onChangeText={setPwd} />
                            </View>
                            {error ? (
                                <Text style={styles.errorText}>{error}</Text>
                            ):null}
                            <View style={styles.input}>
                                <Button mode="contained" onPress={handleLogin}>Login</Button>
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <Text>UOV ©2024</Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,

    },
    header: {
        flex: 3,
        width: '100%',
    },
    body: {
        flex: 5,
        width: '100%',
    },
    footer: {
        flex: 2,
        backgroundColor: '#810541',
        width: '100%',
        alignItems: 'center',
    },
    input: {
        padding: 5,
        marginBottom: 5,
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
    }
})