import { KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Login(){
    return(
        <SafeAreaProvider>
            <SafeAreaView>
            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <Text variant="displayLarge" style={styles.title}> STUDENT LOGIN</Text>
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