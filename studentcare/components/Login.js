import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Login() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Text variant="displayLarge" style={styles.title}> STUDENT LOGIN</Text>
                        </View>
                        <View style={styles.body}>

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
    }
})