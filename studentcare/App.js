import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Course from './components/Course';
import Subjects from './components/Subjects';
import Profile from './components/Profile';
import ManageStudents from './components/ManageStudent';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#4a148c' },
        headerTitleStyle: { fontWeight: 'bold' , color:'#fff' },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'UoV Student Care' }}
      />
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ title: 'UoV Student Care' }}
      />
      <Stack.Screen
        name="List"
        component={StudentList}
        options={{ title: 'List' }}
      />
      <Stack.Screen
        name="AddStudent"
        component={AddStudent}
        options={{ title: 'Add Student' }}
      />
    </Stack.Navigator>
  );
}

function MainTab({ route }) {
  const user = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4a148c",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white" },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={user}
        options={{
          tabBarLabel: 'Profile',
          tabBarStyle: {  display: 'none' },
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account" size={size} color={color} />;
          },
        }} />
      <Tab.Screen
        name="Course"
        component={Course}
        initialParams={user}
        options={{
          tabBarLabel: 'Course',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="school" size={size} color={color} />;
          },
        }} />
      <Tab.Screen
        name="Subjects"
        component={Subjects}
        initialParams={user}
        options={{
          tabBarLabel: 'Subjects',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="book-open-outline" size={size} color={color} />;
          },
        }} />
        <Tab.Screen
        name="Setting"
        component={ManageStudents}
        initialParams={user}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }} />
        <Tab.Screen
        name="AddStudent"
        component={AddStudent}
        initialParams={user}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <StatusBar style="auto" />
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
