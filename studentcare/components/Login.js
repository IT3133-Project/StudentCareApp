import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Login() {
    const [name,setName]=useState('');
    const [pwd,setPwd]=useState('');
    const navigation=useNavigation();

    const handleLogin=()=>{
        
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
                            <TextInput label="Username" mode="outlined" value={name} onChangeText={setName}/>
                            </View>
                            <View style={styles.input}>
                            <TextInput label="Password" mode="outlined" secureTextEntry="true" value={pwd} onChangeText={setPwd}/>
                            </View>
                            <View style={styles.input}>
                            <Button mode="contained" onPress={() => {}}>Login</Button>
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
    input:{
        padding: 5,
        marginBottom: 5,
    }
})