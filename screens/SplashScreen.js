import React, { useEffect, useRef } from 'react';
import {
  View,
  Animated,
  Image,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../assets/styles/styles';

const LogoImage = require('../assets/geolocator.gif');

const Stack = createStackNavigator();

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {

      navigation.navigate('HomeScreen');
    });
  }, [fadeAnim, navigation]);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? '#000' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <View style={styles.oval}>
          <Image source={LogoImage} style={styles.logo} resizeMode="contain" />
        </View>
      </Animated.View>
    </View>
  );
};



const localStyles = StyleSheet.create({
  oval: {
    width: 100, 
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  logo: {
    width: '80%',
    height: '80%',
  },
});


const combinedStyles = StyleSheet.create({
  ...styles,
  ...localStyles,
});

export default SplashScreen;
