import { View, Text, StyleSheet, Image, Animated, TouchableOpacity , Dimensions} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Video } from 'expo-av';
import icon from "../assets/Match matters logo.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const slides = [
    {
      id: 1,
      video: require('../assets/mixkit-group-of-friends-making-a-toast-with-wine-42718-4k.mp4'),
      title: 'Party & Connect Safely',
      subtitle: 'Experience fun and engaging events while making meaningful connections. Enjoy your journey with peace of mind in our friendly space.'
    },
    {
      id: 2,
      video: require('../assets/onscreen2.mp4'),
      title: 'Meet Friendly Faces',
      subtitle: 'Connect with genuine, friendly individuals in a welcoming environment. Respect and kindness are at the heart of our community.'
    },
    {
      id: 3,
      video: require('../assets/onscreen3.mp4'),
      title: 'Secure & Safe Connections',
      subtitle: 'Join our community with confidence. We prioritize your safety with verified profiles and robust security measures.'
    }, 
  ];

  const Slide = ({item, navigation}) => {
    const fadeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnimation]);
  
    return (
        <Animated.View style={[styles.slideContainer, { opacity: fadeAnimation }]}>
       <Video
            source={item.video} 
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.overlay}>
          <TouchableOpacity 
              style={styles.skipButton} 
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.logoWrapper}>
              <Image source={icon} style={styles.image} />
              <Text style={styles.tagLine}>(Tagline For match matters)</Text>
            </View>
    
         
            <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.subtitle}>{item?.subtitle}</Text>
            {/* <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate("OnboardingScreen2")}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </View>
            </TouchableOpacity>
            </View> */}
            </View>

       
            
          </View>
        </Animated.View>
        
      );
  };



  const OnboardingScreen = ({navigation}) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();
    const updateCurrentSlideIndex = (event) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX / width);
      setCurrentSlideIndex(currentIndex);
    };

      const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
          const offset = nextSlideIndex * width;
          ref?.current.scrollToOffset({offset});
          setCurrentSlideIndex(currentSlideIndex + 1);
        } else {
          navigation.navigate('Login'); 
        }
      };


      const Footer = ({ goToNextSlide }) => {
        return (
              <View
            style={{
              // height: height * 0,
              justifyContent: 'space-between',
              // paddingHorizontal: 20,
            }}>
            {/* Indicator container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                // marginTop: 10,
              }}>
              {/* Render indicator */}
              {slides.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    currentSlideIndex == index && {
                      width: 25,
                    },
                  ]}
                />
              ))}
            </View>

            {/* <TouchableOpacity 
              style={styles.skipButton} 
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity> */}

            <View style={styles.footer}>
            <TouchableOpacity onPress={goToNextSlide}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </View>
            </TouchableOpacity>
            </View>
    

          </View>
          
        );
      };

      // const Footer = ({ goToNextSlide }) => {
      //   return (
      //     <View style={styles.footer}>
      //       <TouchableOpacity onPress={goToNextSlide}>
      //         <View style={styles.button}>
      //           <Text style={styles.buttonText}>Next</Text>
      //         </View>
      //       </TouchableOpacity>
          // </View>
      //   );
      // };
    return(
      
        <GestureHandlerRootView style={styles.rootView}>
        <SafeAreaView style={styles.safeArea}>
        {/* <StatusBar /> */}
        <FlatList
          ref={ref}
          data={slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => <Slide item={item} navigation={navigation} />}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        />
        <Footer goToNextSlide={goToNextSlide}/>
        
      </SafeAreaView>
      </GestureHandlerRootView>
   
    )
  };

const styles = StyleSheet.create({

    logoWrapper: {
      position: 'absolute',
      top: 90,
      paddingHorizontal: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    rootView: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    flatListContent: {
      height: height,
    },
    slideContainer: {
      width: width,
      height: height,
      overflow: 'hidden',
    },
    video: {
      // ...StyleSheet.absoluteFill,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
  
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    skipButton: {
      position: 'absolute',
      top: 40,
      right: 20,
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    skipButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    titleWrapper: {
      marginTop: 550,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#fff',
    },
    subtitle: {
      fontSize: 12,
      color: 'gray',
      textAlign: 'center',
      marginHorizontal: 20,
      marginBottom: 30,
      color: '#fff',
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      width: '100%',
      alignItems: 'center',
    },
    // button: {
    //   flexDirection: 'row',
    //   backgroundColor: "#3b5998",
    //   height: 50,
    //   width: 320,
    //   borderRadius: 35,
    //   alignItems: "center",
    //   justifyContent: "center",
    //   marginVertical: 5,
    // },
    buttonText: {
      fontSize: 20,
      fontWeight: "500",
      color: 'white',
    },
    image: {
      width: 260,
      height: 115,
      resizeMode: "cover",
    },
    tagLine: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    contentWrapper: {
      position: 'absolute',
      bottom: 120,
      width: '100%',
      alignItems: 'center',
    },

    button: {
      flexDirection: 'row',
      backgroundColor: "#3b5998",
      height: 50,
      width : 300,
      marginHorizontal: 50,
      borderRadius: 35,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 5,
    },
    // buttonText: {
    //   fontSize: 20,
    //   fontWeight: "500",
    //   color: 'white',
    //   marginLeft: 10,
    // },
    indicator: {
      height: 7.5,
      width: 10,
      backgroundColor: 'grey',
      marginHorizontal: 3,
      borderRadius: 2,
    },
  });
  
  export default OnboardingScreen;