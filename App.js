import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreenView from './SplashScreenView';
import Login from './Screens/Login';
import SignNumber from './Screens/SignNumber';
import OtpScreen from './Screens/OtpScreen';
import SignEmail from './Screens/SignEmail';
import EmailOTPScreen from './Screens/EmailOTPScreen';
import NamePage from './Screens/NamePage';
import AgeScreen from './Screens/AgeScreen';
import ProfilePicScreen from './Screens/ProfilePicScreen';
import PreferenceScreen from './Screens/PreferenceScreen';
import FeedScreen from './HomeScreens/FeedScreen';
import Profile from './HomeScreens/Profile';
import LikedYou from './HomeScreens/LikedYou';
import Chat from './HomeScreens/Chat';
import ForYou from './HomeScreens/ForYou';
import LastScreen from './Screens/LastScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    },2000);
    
  })

   return (
    <NavigationContainer>
       <Stack.Navigator>
       {isShowSplash ? (
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreenView}
        options={{ headerShown: false }}
      />
    ) : (
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    )}
    <Stack.Screen
        name="SignNumber"
        component={SignNumber}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignEmail"
        component={SignEmail}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="EmailOTPScreen"
        component={EmailOTPScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="NamePage"
        component={NamePage}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="AgeScreen"
        component={AgeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="ProfilePicScreen"
        component={ProfilePicScreen}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
      name='LastScreen'
      component={LastScreen}
      options={{ headerShown: false }}
      />
      <Stack.Screen 
      name='HomeScreen'
      component={TabNavigator}
      options={{ headerShown: false }}
      />
      
       </Stack.Navigator>
    </NavigationContainer>

 

   ); 
 
}


const TabNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName='HomeScreen'
    screenOptions={{
      tabBarStyle: {
        height: 90, 
        backgroundColor: 'white', 
      },
      tabBarLabelStyle: {
        fontSize: 12, 
        fontWeight: "bold"
      },
      tabBarIconStyle: {
        marginBottom: 5, 
        marginTop:5,
      },
    }}    
    >
        <Tab.Screen name = "FeedScreen"
      component={FeedScreen}
      options={{
        title: 'People',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons name="home" color={"#4099FF"} size={40} />
        ),
        headerShown: false,
      }}
      />
      <Tab.Screen name = "Profile"
      component={Profile}
      options={{
        title: 'Profile',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons name="account" color={"#4099FF"} size={40} />
        ),
        headerShown: false,
      }}
      />
       <Tab.Screen name = "Liked"
      component={LikedYou}
      options={{
        title: 'Liked',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons name="heart" color={"#4099FF"} size={40} />
        ),
        headerShown: false,
      }}
      />
        <Tab.Screen name = "Chat"
      component={Chat}
      options={{
        title: 'Chat',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons name="chat" color={"#4099FF"} size={40} />
        ),
      }}
      />

<Tab.Screen name = "ForYou"
      component={ForYou}
      options={{
        title: 'ForYou',
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons name="star-check" color={"#4099FF"} size={40} />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
