import { View, Text, StyleSheet, Image, Animated, ScrollView } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Video } from 'expo-av';
import icon from "../assets/Match matters logo (1).png";

export default function Profile({ navigation }) {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);


  return (
     <Animated.View style={[styles.container, { opacity: fadeAnimation }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.banner}>Profile</Text>
        <MaterialCommunityIcons name="view-dashboard-edit" color={"#000000"} size={40}  style={styles.filter} />       
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../assets/sv1.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
        <Text style = {styles.profileName}>Suyash Bansod <Text style ={{fontSize:15,}}>(He/Him)</Text> <MaterialCommunityIcons name="check-decagram" color={"#000000"} size={35} /></Text>
        
       
        <View style={styles.premium}>
            <MaterialCommunityIcons name="check-decagram" color={"#000000"} size={35} style={styles.premiumIcon} />
            <View>
              <Text style={styles.premiumText}>Premium Services</Text>
              <Text>See The List Of Everyone Who Has Liked You!!</Text>
            </View>
          </View>
       
          <View style={styles.premium1}>
            <MaterialCommunityIcons name="cash-plus" color={"#000000"} size={35} style={styles.premiumIcon1} />
            <View>
              <Text style={styles.premiumText1}>Boost</Text>
              <Text>Make Your Profile StandOut!!</Text>
            </View>
          </View>
     
      </View>

      </ScrollView>
     
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'absolute',
    // left: 10,
    top:40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#fff', 
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  banner: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  filter: {
    left:220,

  },
  videoContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120, 
    marginBottom: 10,
  },
  video: {
    width: '50%', 
    height: '30%', 
    borderRadius: 500, 
  },
  profileName:{
    marginTop:15,
    fontSize: 25,
    fontWeight: 'bold',
  },
   premium:{
    marginTop: 40,
    padding: 25,
    backgroundColor: '#ffb3ba',
    borderRadius: 30,
    flexDirection: 'row',
    width: '80%',
    height: '20%',
   },
   premiumIcon: {
    marginRight: 10,
  },
   premiumText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  premium1:{
    marginTop: 40,
    padding: 25,
    backgroundColor: '#bae1ff',
    borderRadius: 30,
    flexDirection: 'row',
    width: '80%',
    height: '20%',
   },
   premiumIcon1: {
    marginRight: 10,
  },
   premiumText1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  
});
