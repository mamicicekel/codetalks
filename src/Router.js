import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useSelector } from 'react-redux'
import auth from "@react-native-firebase/auth";
import FlashMessage from "react-native-flash-message";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import WelcomeScreen from './screens/authStack/welcome/WelcomeScreen';
import RegisterScreen from './screens/authStack/register/RegisterScreen';
import SignInScreen from './screens/authStack/signIn/SignInScreen';
import RoomsScreen from './screens/homeStack/rooms/RoomsScreen';
import ChatScreen from './screens/homeStack/chat/ChatScreen';
import ProfileScreen from './screens/profileStack/profile/ProfileScreen';
import SettingsScreen from './screens/profileStack/settings/SettingsScreen';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function AuthStack() {
	const darkMode = useSelector((state) => state.theme.darkMode)

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
			<Stack.Screen
				name="RegisterScreen"
				component={RegisterScreen}
				options={{
					headerShown: true,
					title: false,
					headerBackTitleVisible: false,
					headerStyle: {
						backgroundColor: darkMode ? 'white' : '#1A1A1A',
					},
					headerShadowVisible: false,
					headerTintColor: darkMode ? '#1A1A1A' : 'white',
				}}
			/>
			<Stack.Screen
				name="SignInScreen"
				component={SignInScreen}
				options={{
					headerShown: true,
					title: false,
					headerBackTitleVisible: false,
					headerStyle: {
						backgroundColor: darkMode ? 'white' : '#1A1A1A',
					},
					headerShadowVisible: false,
					headerTintColor: darkMode ? '#1A1A1A' : 'white',
				}}
			/>
		</Stack.Navigator>
	)
}

function ProfileStack() {
	const darkMode = useSelector((state) => state.theme.darkMode)

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					headerShown: true,
					title: 'Profile',
					headerBackTitleVisible: false,
					headerStyle: {
						backgroundColor: darkMode ? 'white' : '#1A1A1A',
					},
					headerShadowVisible: false,
					headerTintColor: darkMode ? '#1A1A1A' : 'white',
					tabBarIcon: ({ focused }) => (
						<Icon name={focused ? "account" : "account-outline"} size={30} />
					),
				}}
			/>
			<Stack.Screen
				name="SettingsScreen"
				component={SettingsScreen}
				options={{
					headerShown: true,
					title: 'Settings',
					headerBackTitleVisible: false,
					headerStyle: {
						backgroundColor: darkMode ? 'white' : '#1A1A1A',
					},
					headerShadowVisible: false,
					headerTintColor: darkMode ? '#1A1A1A' : 'white',
				}}
			/>
		</Stack.Navigator>
	)
}

function HomeStack() {
	const darkMode = useSelector((state) => state.theme.darkMode)
	
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="RoomsScreen"
				component={RoomsScreen}
				options={{
					headerShown: true,
					title: 'Rooms',
					headerBackTitleVisible: false,
					headerStyle: {
						backgroundColor: darkMode ? 'white' : '#1A1A1A',
					},
					headerShadowVisible: false,
					headerTintColor: darkMode ? '#1A1A1A' : 'white',
				}}
			/>
			<Stack.Screen
				name="ChatScreen"
				component={ChatScreen}
				options={({ route }) => ({
					headerShown: true,
					title: route.params.item.room,
					headerBackTitleVisible: false,
					headerStyle: {
						backgroundColor: darkMode ? 'white' : '#1A1A1A',
					},
					headerShadowVisible: false,
					headerTintColor: darkMode ? '#1A1A1A' : 'white',
				})}
			/>
		</Stack.Navigator>
	)
}

function TabStack() {
	const darkMode = useSelector((state) => state.theme.darkMode)
	return (
		<Tab.Navigator screenOptions={{
			headerShown: false,
			tabBarShowLabel: false,
			tabBarStyle: { backgroundColor: darkMode ? 'white' : '#1A1A1A' },
		}}>
			<Tab.Screen
				name="HomeStack"
				component={HomeStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon name={focused ? "home" : "home-outline"} size={30} color={darkMode ? '#146C94' : '#146C94'} />
					),
				}}
			/>
			<Tab.Screen
				name="ProfileStack"
				component={ProfileStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon name={focused ? "account" : "account-outline"} size={30} color={darkMode ? '#146C94' : '#146C94'} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default function App() {
	const [initializing, setInitializing] = useState(true)
	const [user, setUser] = useState()

	function onAuthStateChanged(user) {
		setUser(user)
		if (initializing) setInitializing(false)
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
		return subscriber
	}, [])

	if (initializing) return null

	return (
		<Provider store={store}>
			<NavigationContainer>
				{!user ?
					<AuthStack />
					:
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="TabStack" component={TabStack} />
					</Stack.Navigator>
				}
				<FlashMessage position="top" />
			</NavigationContainer>
		</Provider>
	)
}