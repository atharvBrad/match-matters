// import React from 'react';
// import { View, StyleSheet, Dimensions} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import OnboardingScreen1 from './OnboardingScreen1';
// import OnboardingScreen2 from './OnboardingScreen2';
// import OnboardingScreen3 from './OnboardingScreen3';

// const { width: screenWidth  } = Dimensions.get('window');

// const OnboardingCarousel = ({ navigation }) => {
//     const carouselItems = [
//         { screen: <OnboardingScreen1/>},
//         { screen: <OnboardingScreen2/> },
//         { screen: <OnboardingScreen3/> },
//     ];

//     const renderItem = ({ item, index }) => {
//         console.log('Rendering item at index:', index);
//         console.log('Item:', item);
//         return (
//             <View style={styles.carouselItem}>
//                 {item.screen}
//             </View>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <Carousel
//                 data={carouselItems}
//                 renderItem={renderItem}
//                 sliderWidth={screenWidth }
//                 itemWidth={screenWidth }
//                 // removeClippedSubviews={false}
//                 // onSnapToItem={(index) => {
//                 //     if (index === carouselItems.length - 1) {
//                 //         // Navigate to Login screen or other action after the last onboarding screen
//                 //         setTimeout(() => {
//                 //             navigation.replace('Login');
//                 //         }, 2000);  // Optional delay for user experience
//                 //     }
//                 // }}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     carouselItem: {
//         flex: 1,
//     },
// });


// export default OnboardingCarousel;  