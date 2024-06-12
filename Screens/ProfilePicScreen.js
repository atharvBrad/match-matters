import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { getRegistrationProgress, saveRegistrationProgress } from '../backend/registrationUtils';

export default function ProfilePicScreen({ navigation }) {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [images, setImages] = useState([null, null, null, null]);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

   

    const pickImage = async (index) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            const newImages = [...images];
            newImages[index] = result.assets[0].uri;
            setImages(newImages);
        }
    };

    if (hasGalleryPermission === false) {
        return <Text>No Access To Internal Storage</Text>;
    }

    useEffect(() => {
        getRegistrationProgress('Photos').then(progressData => {
          if(progressData && progressData.images){
              setImages(progressData.images);
          }
        })
      },[]);
  
      const onPressContinue = () => {
          saveRegistrationProgress('Photos',{images})
          navigation.navigate('PreferenceScreen')
      }

      
    return (
        <SafeAreaView style={styles.area}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={50}
                        behavior='padding'
                        style={styles.containerAvoidingView}
                    >
                        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                            <Text style ={{ marginLeft: 20,}}>Back</Text>
                        </TouchableOpacity>

                        <Text style={styles.headTitle}>Upload Your Pictures</Text>

                        <View style={styles.imageRow}>
                            {[0, 1].map((index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.uploadContainer}
                                    onPress={() => pickImage(index)}
                                >
                                    <Text>Upload Picture {index + 1}</Text>
                                    {images[index] && <Image source={{ uri: images[index] }} style={styles.imageStyle} />}
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={styles.imageRow}>
                            {[2, 3].map((index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.uploadContainer}
                                    onPress={() => pickImage(index)}
                                >
                                    <Text>Upload Picture {index + 1}</Text>
                                    {images[index] && <Image source={{ uri: images[index] }} style={styles.imageStyle} />}
                                </TouchableOpacity>
                            ))}
                        </View>
                        <TouchableOpacity  onPress={onPressContinue}>
                            <View style ={styles.skipButton}>         
                            <Text style={styles.skipText}>Skip</Text>
                            </View>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
        alignItems: 'center',
    },
    containerAvoidingView: {
        // marginLeft: 20,
        marginLeft:30,
        marginRight:30,
        flex: 1,
        width: '100%',
        // alignItems: 'center',
    },
    headTitle: {
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 20,
        marginRight: 100,
        marginLeft: 20,
    },
    uploadContainer: {
        width: '45%',
        height: 180,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 10,
        marginTop:20,
        marginBottom :40,
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: '5%',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    skipButton: {
      width:100,
      height:50,
      marginLeft: 300,
      borderRadius:35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#244DB7'
    },
    skipText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
});
