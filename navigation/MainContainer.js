import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import whiteLogo from '../assets/whiteTextLogo.png';

// Screens
import Home from './screens/Home';
import MyTickets from './screens/MyTickets';
import Menu from './screens/Menu';

// Screen names
const homeName = "Search";
const myTicketsName = "My Tickets";
const menuName = "Menu";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === homeName) {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === myTicketsName) {
              iconName = focused ? 'ticket' : 'ticket-outline';
            } else if (route.name === menuName) {
              iconName = focused ? 'grid' : 'grid-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false, // hide header
        })}
        tabBarOptions={{
          activeTintColor: '#2B436C',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
          tabBarActiveTintColor: "#2B436C",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: { 
            paddingBottom: 10, 
            fontSize: 10 
          },
          tabBarStyle: { 
            display: "flex" 
          }
        }}>

        <Tab.Screen name={homeName} component={HomeStackScreen} />
        <Tab.Screen name={myTicketsName} component={MyTicketsStackScreen} />
        <Tab.Screen name={menuName} component={MenuStackScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={homeName}
        component={Home}
        options={{
          headerTitle: () => (
            <Image
              source={whiteLogo}
              style={{ width: 120, height: 40, tintColor: 'white' }} // Set the color of the logo
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2B436C', // Background color of the header bar
          },
          headerTintColor: 'white', // Color of the back button and header title
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MyTicketsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={myTicketsName}
        component={MyTickets}
        options={{
          headerTitle: () => (
            <Image
              source={whiteLogo}
              style={{ width: 120, height: 40, tintColor: 'white' }} // Set the color of the logo
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2B436C', // Background color of the header bar
          },
          headerTintColor: 'white', // Color of the back button and header title
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MenuStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={menuName}
        component={Menu}
        options={{
          headerTitle: () => (
            <Image
              source={whiteLogo}
              style={{ width: 120, height: 40, tintColor: 'white' }} // Set the color of the logo
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2B436C',
            height: 200,
          },
          headerTintColor: 'white', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainContainer;
