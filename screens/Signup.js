import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../assets/styles/styles';
import auth from '@react-native-firebase/auth';
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const SignIn = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
/*
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    GoogleSignin.configure({
      webClientId: '320337386381-qdo0kdbd1a6b354nnoce9ivh0m4b1a74.apps.googleusercontent.com',
    });
  }, [fadeAnim]);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.replace('HomeScreen');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Sign-In Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign-In In Progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services Not Available');
      } else {
        console.error(error);
        Alert.alert('Sign-In Error', error.message);
      }
    }
  };
*/
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In with Google</Text>
      <TouchableOpacity style={styles.button} //</View>onPress={handleGoogleSignIn}
      >
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.goBack()}>
        <Text style={styles.signInButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignIn;
