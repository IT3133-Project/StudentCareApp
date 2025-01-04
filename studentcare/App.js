import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Course from './components/Course';
import Subjects from './components/Subjects';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator  initialRouteName="Login" screenOptions={{
      headerStyle: { textAlign: 'center' },
    }}>
      <Stack.Screen name="Login" component={Login}   options={{ title: 'UoV Student Care' } }/>
      <Stack.Screen name="Profile" component={Profile}   options={{ title: 'Profile' } }/>
      <Stack.Screen name="Course" component={Course}   options={{ title: 'Course' } }/>
      <Stack.Screen name="Subjects" component={Subjects}   options={{ title: 'Subjects' } }/>
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
