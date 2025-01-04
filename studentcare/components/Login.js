import { KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
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
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    }
})