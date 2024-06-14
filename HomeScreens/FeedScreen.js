import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Video } from 'expo-av';
import icon from "../assets/Match matters logo (1).png";

export default function FeedScreen({ navigation }) {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  // const { userData } = route.params;
  // const [data, setData] = useState([]);
  const [data, setData] = useState(''); 

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  // useEffect(() => {
  //   fetch("http://192.168.1.37:4000/getAllUser",{
  //     method:"GET",    
  //   }).then((res) => res.json()).then((data) => {
  //     console.log(data, "userData");
  //     setData(data.data);
  //   });
  // }, []);

  useEffect(() => {
    fetch("http://192.168.43.98:4000/getLatestUser", {
      method: "GET",    
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("userData from /lastestUser", data);
      setData(data.data);
    });
  }, []);


  return (
    <Animated.View style={[styles.container, { opacity: fadeAnimation }]}>
      <View style={styles.headerContainer}>
        <Image source={icon} style={styles.logo} />

        <MaterialCommunityIcons name="filter-variant" color={"#000000"} size={40}  style={styles.filter} />
        
      </View>
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
      </View>
      {/* {data.map(i => {
            return(
              <View>
                <Text>{i.firstName}</Text>
                <Text>{i.age}</Text>
              </View>
            )
          })} */}
{/* 
{data && ( // Add a check to ensure data is not null before mapping
        <View>
          <Text>{data.firstName}</Text>
          <Text>{data.age}</Text>
        </View>
      )} */}
      <View style={styles.overlay}>
        <View style={styles.logoWrapper}>
          {/* <Image source={icon} style={styles.image} /> */}
          <Text style={styles.Name}>{data.firstName}</Text>
          <Text style={styles.Name}>{data.age}</Text>
          {/* <Text style={styles.Profession}></Text>
          <Text style={styles.tagLine}>I love Football</Text> */}
        </View>
      </View>
    </Animated.View>
  );
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff', 
  },
  logo : {
    width: 140,
    height: 62,
  },
  filter: {
    left:200,

  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110, 
    marginBottom: 10,
  },
  video: {
    width: '90%', 
    height: '100%', 
    borderRadius: 10, 
  },
  overlay: {
    position: 'absolute',
    bottom: 150, 
    left: 30,
    right: 30,
  },
  logoWrapper: {
    position: "relative",
    top: 50,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  image: {
    width: 260,
    height: 115,
    resizeMode: "cover",
  },
  Name: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  Profession: {
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
  },
});
